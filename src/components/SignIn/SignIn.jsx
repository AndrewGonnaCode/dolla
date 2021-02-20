import React from 'react'
import { Container, Form, FormContent, FormWrap, Icon,FormH1, FormLabel, FormInput, FormButton, Text, SignInBg, VideoBg } from './SignInElements'
import Video from '../../videos/globus.mp4'


const SignIn = () => {
    return (
        <>
          <Container>
          <SignInBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </SignInBg>
              <FormWrap>
              <Icon to="/">dolla</Icon>
                  <FormContent>
                      <Form action="#">
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor="for">Email</FormLabel>
                        <FormInput type="email" required/>
                        <FormLabel htmlFor="for">Password</FormLabel>
                        <FormInput type="password" required/>
                        <FormButton type="submit">Continue</FormButton>
                        <Text>Forgot password</Text>
                      </Form>
                  </FormContent>    
              </FormWrap>    
          </Container>  
        </>
    )
}

export default SignIn
