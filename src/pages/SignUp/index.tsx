/* eslint-disable @typescript-eslint/no-empty-function */
import { Formik } from 'formik';
import React from 'react';
import {
  Categories,
  Footer,
  Header,
  ContentWrapper,
  SignUpForm,
} from '../../components';
import { initialValues, signUpSchema } from './form';
import { Wrapper } from './styles';

const SignUp: React.FC = () => {
  const onSubmit = () => {};

  return (
    <Wrapper>
      <Header />
      <Categories />
      <ContentWrapper>
        <Formik
          onSubmit={onSubmit}
          validationSchema={signUpSchema}
          initialValues={initialValues}
          enableReinitialize
        >
          <SignUpForm />
        </Formik>
      </ContentWrapper>
      <Footer />
    </Wrapper>
  );
};

export default SignUp;
