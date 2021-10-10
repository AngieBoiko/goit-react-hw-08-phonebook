import React, { useCallback } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import { routes } from 'utils/routes';

const INITIAL_VALUES = {
  email: '',
  password: '',
};
export default function Login() {
  const validate = useCallback(values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
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
      <h1>Login form</h1>
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
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" placeholder="Enter email" />
            <ErrorMessage name="email" component="div" />
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              name="password"
              placeholder="Enter password"
            />
            <ErrorMessage name="password" component="div" />
            <button
              type="submit"
              disabled={
                isSubmitting ||
                !(
                  Object.keys(touched).length ===
                    Object.keys(INITIAL_VALUES).length &&
                  Object.keys(errors).length === 0
                )
              }
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <Link to={routes.registration}>
        Have not account yet?We are waiting for you on registration page!
      </Link>
    </div>
  );
}
