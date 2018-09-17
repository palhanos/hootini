import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Form } from 'react-final-form';
import styled from 'react-emotion';
import { navigate } from '@reach/router';
import { TextButton } from './styles/ButtonStyles';
import FormInputField from './FormInputField';
import { wait } from '../lib/utils';

const FormContent = styled('div')({
  margin: '0 1rem 1rem 1rem'
});

const FormActions = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end'
});

const Error = styled('div')(({ theme }) => ({
  ...theme.typography.caption,
  background: theme.colors.lightGrey1,
  color: theme.colors.danger,
  padding: '0.5rem',
  margin: '1rem',
  textAlign: 'center'
}));

export default class SignupForm extends Component {
  handleSubmit = async (signup, formData) => {
    await signup({ variables: formData });
    await wait();
    navigate(`/`);
  };

  render() {
    return (
      <Mutation mutation={SIGNUP_MUTATION}>
        {(signup, { loading, error }) => (
          <Form onSubmit={formData => this.handleSubmit(signup, formData)}>
            {({ handleSubmit, pristine, dirtySinceLastSubmit }) => (
              <form onSubmit={handleSubmit}>
                <FormContent>
                  <FormInputField
                    label="Name"
                    name="name"
                    placeholder="Name"
                    required
                  />
                  <FormInputField
                    label="Email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                  />
                  <FormInputField
                    label="Password"
                    name="password"
                    placeholder="Password"
                    type="password"
                    required
                  />
                  {error &&
                    !dirtySinceLastSubmit && <Error>{error.message}</Error>}
                </FormContent>
                <FormActions>
                  <TextButton disabled={pristine || loading}>
                    Sign Up
                  </TextButton>
                </FormActions>
              </form>
            )}
          </Form>
        )}
      </Mutation>
    );
  }
}

const SIGNUP_MUTATION = gql`
  mutation signup($name: String!, $email: String!, $password: String!) {
    signup(input: { name: $name, email: $email, password: $password }) {
      id
      name
      email
      permissions
    }
  }
`;
