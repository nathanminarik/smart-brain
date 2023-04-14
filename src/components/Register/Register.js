import React from 'react';
import { useForm, useNavigation, useUser } from '../../hooks';
import { EndPoints, Environments, FormInputs, Routes } from '../../constants';

const inputFields = [FormInputs.Name, FormInputs.Email, FormInputs.Password];

export const Register = () => {
  const [, navigate] = useNavigation();
  const [data, Inputs] = useForm(inputFields);
  const [, setUser] = useUser(inputFields);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(Environments.Local + EndPoints.POST.Register, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((user) => setUser(user))
      .then(() => navigate(Routes.Home))
      .catch(console.log);
  };

  return (
    <div className="pa6 black-80">
      <article className="br3 ba dark-gray b--black-10 mv4 w-100 mw5 center pa3">
        <div className="measure center">
          <form onSubmit={handleSubmit}>
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1  fw6 ph0 mh0">Register</legend>
              <div className="mt3">{Inputs}</div>
            </fieldset>
            <div>
              <button
                onClick={handleSubmit}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
              >
                {'Register'}
              </button>
            </div>
          </form>
        </div>
      </article>
    </div>
  );
};
