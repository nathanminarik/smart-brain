// Do not include a leading /
export const Routes = {
  Signin: 'signin',
  Home: 'home',
  Register: 'register',
};

export const FormInputs = {
  Name: { id: 'name', type: 'name', name: 'name', label: 'Name' },
  Email: { id: 'email-address', type: 'email', name: 'email', label: 'Email' },
  Password: {
    id: 'password',
    type: 'password',
    name: 'password',
    label: 'Password',
  },
};

export const EndPoints = {
  POST: {
    Signin: '/signin',
    Register: '/register',
  },
};

export const Environments = {
  Local: 'http://localhost:3000',
};
