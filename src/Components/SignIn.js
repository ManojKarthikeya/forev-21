import React, { useRef, useState } from 'react'
import { Button, Card, CardBody, Form, FormGroup, Input, Label } from 'reactstrap'
import { useAuth } from '../contexts/AuthContext'
// import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

export default function SignIn() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const {signup} = useAuth()
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if(passwordRef.current.value !== passwordConfirmRef.current.value){
      return setError('passwords do not match')
    }

    signup(emailRef.current.value, passwordRef.current.value)
  }
  return (
    <>
      <Card>
        <CardBody>
          <h2 className='text-centre mb-4' >Sign Up</h2>
          <Form>
            <FormGroup >
              <Label for='email'>Email</Label>
              <Input type= 'email' id='email' 
              ref={emailRef} required
              ></Input>
            </FormGroup>
            <FormGroup >
              <Label for='password'>Password</Label>
              <Input type= 'password' id='password' 
              ref={passwordRef} required
              ></Input>
            </FormGroup>
            <FormGroup >
              <Label for='password-confirmation'>Password confirmation</Label>
              <Input type= 'password' id='password-confirmation' 
              ref={passwordConfirmRef} required
              ></Input>
            </FormGroup>
            <Button color='primary' className='w-100'>Sign Up</Button>
          </Form>
        </CardBody>
      </Card>
      <div className='w-100 text-centre mt-2'>Already have an account? Log In</div>
    </>
  )
}
