import React from 'react';
import { useForm, useNavigation, useUser } from '../../hooks';
import { EndPoints, Routes } from './../../constants';

const inputFields = [
  { id: 'email-address', type: 'email', name: 'email', label: 'Email' },
  { id: 'password', type: 'password', name: 'password', label: 'Password' },
];

export const SignIn = () => {
  const [, navigate] = useNavigation();
  const [, setUser] = useUser();
  const [data, Inputs] = useForm(inputFields);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/${EndPoints.POST.Signin}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((user) => {
        setUser(user);
        console.log({ user, route: Routes.Home });
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
