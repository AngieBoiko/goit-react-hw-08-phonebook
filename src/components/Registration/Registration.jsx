import React, { useCallback } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import { routes } from 'utils/routes';

const INITIAL_VALUES = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export default function Registration() {
  const validate = useCallback(values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length < 3) {
      errors.name = 'Name should be longer then 3 symbols';
    }
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 7 || values.password.length < 12) {
      errors.password =
        'Password should be longer then 7 symbols and shorter than 12 symbols';
    }
    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Password is not confirmed!';
    }
    return errors;
  }, []);

  const handleSubmit = useCallback((values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  }, []);

  return (
    <div>
      <h1>Registration form</h1>
      <Formik
        initialValues={INITIAL_VALUES}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form>
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" placeholder="Enter name" />
            <br />
            <ErrorMessage name="name" component="div" />
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" placeholder="Enter email" />
            <br />
            <ErrorMessage name="email" component="div" />
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              name="password"
              placeholder="Enter password"
            />
            <br />
            <ErrorMessage name="password" component="div" />
            <label htmlFor="confirmPassword">Confirm password</label>
            <Field
              type="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm password"
            />
            <br />
            <ErrorMessage name="confirmPassword" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <Link to={routes.login}>
        Have you alredy have account?We are waiting for you on login page!
      </Link>
    </div>
  );
}
