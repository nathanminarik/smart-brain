import React from 'react';
import { useForm, useNavigation, useUser } from '../../hooks';
import { Environments, EndPoints, Routes, FormInputs } from './../../constants';

const inputFields = [FormInputs.Email, FormInputs.Password];

export const SignIn = () => {
  const [, navigate] = useNavigation();
  const [, setUser] = useUser();
  const [data, Inputs] = useForm(inputFields);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(Environments.Local + EndPoints.POST.Signin, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((user) => {
        if (!user || !user.id) {
          throw Error('User not found');
        }
        setUser(user);
        navigate(Routes.Home);
      })
      .catch(console.log);
  };

  return (
    <div className="pa6 black-80">
      <article className="br3 ba dark-gray b--black-10 mv4 w-100 mw5 center pa3">
        <div className="measure center">
          <form onSubmit={handleSubmit}>
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1  fw6 ph0 mh0">{'Sign In'}</legend>
              <div className="mt3">{Inputs}</div>
            </fieldset>
            <div className="">
              <button
                onClick={handleSubmit}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
              >
                {'Sign In'}
              </button>
            </div>
            <div className="lh-copy mt3">
              <p
                onClick={() => navigate(Routes.Register)}
                className="f6 link dim black db pointer"
              >
                {'Register'}
              </p>
            </div>
          </form>
        </div>
      </article>
    </div>
  );
};
