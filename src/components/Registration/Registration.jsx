import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import routes from 'utils/routes';
import { register } from 'redux/Auth/usersAPI';
import Button from '@material-ui/core/Button';
import styles from './styles.module.css';

const INITIAL_VALUES = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export default function Registration() {
  const dispatch = useDispatch();

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
    } else if (values.password.length < 7 || values.password.length > 12) {
      errors.password =
        'Password should be longer then 7 symbols and shorter than 12 symbols';
    }
    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Password is not confirmed!';
    }
    return errors;
  }, []);

  const handleSubmit = useCallback(
    (values, { setSubmitting }) => {
      const { name, email, password } = values;
      dispatch(
        register({
          name,
          email,
          password,
        }),
      );
      setSubmitting(false);
    },
    [dispatch],
  );

  return (
    <div className={styles.form_container}>
      <h1 className={styles.form_title}>Registration form</h1>
      <Formik
        initialValues={INITIAL_VALUES}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleSubmit,
          handleChange,
          isSubmitting,
        }) => (
          <Form className={styles.form}>
            <label htmlFor="name">Name</label>
            <Field
              className={styles.form_field}
              type="text"
              name="name"
              placeholder="Enter name"
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <br />
            <ErrorMessage
              className={styles.error_message}
              name="name"
              component="div"
            />
            <label htmlFor="email">Email</label>
            <Field
              className={styles.form_field}
              type="email"
              name="email"
              placeholder="Enter email"
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <br />
            <ErrorMessage
              className={styles.error_message}
              name="email"
              component="div"
            />
            <label htmlFor="password">Password</label>
            <Field
              className={styles.form_field}
              type="password"
              name="password"
              placeholder="Enter password"
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <br />
            <ErrorMessage
              className={styles.error_message}
              name="password"
              component="div"
            />
            <label htmlFor="confirmPassword">Confirm password</label>
            <Field
              className={styles.form_field}
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              onBlur={handleBlur}
            />
            <br />
            <ErrorMessage
              className={styles.error_message}
              name="confirmPassword"
              component="div"
            />
            <Button
              className={styles.form_btn}
              color="primary"
              variant="contained"
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
            </Button>
          </Form>
        )}
      </Formik>
      <Link to={routes.login} className={styles.link}>
        Have you already have account?We are waiting for you on login page!
      </Link>
    </div>
  );
}
