import React from 'react';
import {
  Field,
  reduxForm
  //InjectedFormProps
} from 'redux-form';
import './SignupForm.scss';

export interface signupForm {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const validate = (values: signupForm) => {
  const errors: any = {};
  if (!values.name) {
    errors.name = 'Required.';
  } else if (values.name.length > 30) {
    errors.name = 'Must be 30 characters or less.';
  } else if (values.name.length < 4) {
    errors.name = 'Must be 4 characters or more.';
  }

  if (!values.email) {
    errors.email = 'Required.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address.';
  }

  if (!values.password) {
    errors.password = 'Required.';
  } else if (values.password.length < 8) {
    errors.password = 'Must be 8 characters or more.';
  }

  if (!values.passwordConfirm) {
    errors.passwordConfirm = 'Required.';
  } else if (values.passwordConfirm.length < 8) {
    errors.passwordConfirm = 'Must be 8 characters or more.';
  }

  if (values.password !== values.passwordConfirm) {
    errors.passwordConfirm = 'Passwords must match.';
  }

  return errors;
};

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error }
}: {
  input: string;
  label: string;
  type: string;
  meta: { touched: boolean; error: {} };
}) => (
  <div className="input-group">
    <label className="label">{label}</label>
    <div className="input-error">
      <input {...input} placeholder={label} type={type} className="input" />
      {touched && error && <span className="error">{error}</span>}
    </div>
  </div>
);

const _SignupForm = (props: any) => {
  //InjectedFormProps should be the props type.
  const { submitting, handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="name" component={renderField} type="text" label="Name" />
      </div>
      <div>
        <Field
          name="email"
          component={renderField}
          type="email"
          label="Email"
        />
      </div>
      <div>
        <Field
          name="password"
          component={renderField}
          type="password"
          label="Password"
        />
      </div>
      <div>
        <Field
          name="passwordConfirm"
          component={renderField}
          type="password"
          label="Confirm Password"
        />
      </div>
      <div className="btn-container">
        <button type="submit" disabled={submitting} className="submit-btn">
          Sign up
        </button>
      </div>
    </form>
  );
};

const SignupForm = reduxForm({
  form: 'signup',
  validate
})(_SignupForm);

export default SignupForm;
