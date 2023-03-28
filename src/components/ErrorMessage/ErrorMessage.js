import React from 'react';

export const ErrorMessage = ({
  error: {
    status: { description, details },
  },
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <p
        style={{ backgroundColor: 'white' }}
        className="pt2 pb1 dib red f4 fw600 mb0"
      >
        {description}
      </p>
      {details && (
        <p
          style={{ backgroundColor: 'white' }}
          className="pb2 pt1 dib red f6 fw400 mt0"
        >
          {details}
        </p>
      )}
    </div>
  );
};
