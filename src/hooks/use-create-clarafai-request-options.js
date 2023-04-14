export const useClarafaiRequestOptions = () => {
  const PAT = '36c4def154fd46589c3926590b002d29';
  const USER_ID = 'nathanminarik';
  const APP_ID = 'smart-brain';
  const MODEL_ID = 'face-detection';

  const fetchFaceDetection = (imageUrl) => {
    // For documentation on how to format the body for ClarifAI see: https://clarifai.com/clarifai/main/models/face-detection?tab=overview
    const raw = JSON.stringify({
      user_app_id: {
        user_id: USER_ID,
        app_id: APP_ID,
      },
      inputs: [
        {
          data: {
            image: {
              url: imageUrl,
            },
          },
        },
      ],
    });

    return (
      fetch('https://api.clarifai.com/v2/models/' + MODEL_ID + '/outputs', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authorization: 'Key ' + PAT,
        },
        body: raw,
      })
        .then(async (response) => {
          const responseJson = await response.json();
          if (!response.ok) throw responseJson;
          return responseJson;
        })
        // This is to reshape the error we get back from clarifai into a more concise error.
        .catch((error) => ({
          error: error.outputs[0],
          status: error.status,
        }))
    );
  };
  return {
    fetchFaceDetection,
  };
};
