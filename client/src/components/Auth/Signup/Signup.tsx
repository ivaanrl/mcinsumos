import React from 'react';
import SignupForm from './SignupForm/SignupForm';
import './Signup.scss';
const Signup = () => {
  const submit = (values: {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
  }) => {
    console.log(values);
  };

  return (
    <div className="signupform-container">
      <SignupForm onSubmit={submit} />
    </div>
  );
};

export default Signup;
