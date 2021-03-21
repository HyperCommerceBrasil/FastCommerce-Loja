/* eslint-disable @typescript-eslint/no-empty-function */
import { Formik } from 'formik';
import React from 'react';
import { GrDocumentUpload } from 'react-icons/gr';
import {
  Categories,
  Footer,
  Header,
  ContentWrapper,
  SignUpForm,
} from '../../components';
import { initialValues, signUpSchema } from './form';
import {
  FormWrapper,
  ImageUploadArea,
  ImageUploadWrapper,
  RowContent,
  Wrapper,
} from './styles';

const SignUp: React.FC = () => {
  const onSubmit = () => {};

  return (
    <Wrapper>
      <Header />
      <Categories />
      <ContentWrapper>
        <RowContent>
          <FormWrapper>
            <Formik
              onSubmit={onSubmit}
              validationSchema={signUpSchema}
              initialValues={initialValues}
              enableReinitialize
            >
              <SignUpForm />
            </Formik>
          </FormWrapper>
          <ImageUploadWrapper>
            <ImageUploadArea>
              <GrDocumentUpload size={50} color="#666" />
            </ImageUploadArea>
          </ImageUploadWrapper>
        </RowContent>
      </ContentWrapper>
      <Footer />
    </Wrapper>
  );
};

export default SignUp;
