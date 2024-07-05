import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, FormGroup, Label, Input } from 'reactstrap';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').required('Required'),
});

const Login = () => (
  
  
  <Formik 
    initialValues={{ email: '', password: '' }}
    validationSchema={SignupSchema}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({ isSubmitting }) => (
      <Form className='main' >
        <FormGroup floating>
          <Field name="email">
            {({ field }) => (
              <Input
                id="exampleEmail"
                {...field}
                placeholder="Email"
                type="email"
              />
            )}
          </Field>
          <Label for="exampleEmail">Email</Label>
          <ErrorMessage name="email" component="div" className="text-danger" />
        </FormGroup>
        
        <FormGroup floating>
          <Field name="password">
            {({ field }) => (
              <Input
                id="examplePassword"
                {...field}
                placeholder="Password"
                type="password"
              />
            )}
          </Field>
          <Label for="examplePassword">Password</Label>
          <ErrorMessage name="password" component="div" className="text-danger" />
        </FormGroup>
        
        <Button type="submit" disabled={isSubmitting}>
          Submit
        </Button>
      </Form>
    )}
  </Formik>


);

export default Login;
