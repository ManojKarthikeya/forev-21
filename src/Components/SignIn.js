import React, { useRef, useState } from 'react'
import { Alert, Button, Card, CardBody, Form, FormGroup, Input, Label } from 'reactstrap'
import { useAuth } from '../contexts/AuthContext'
// import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

export default function SignIn(props) {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const {signUP} = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    if(passwordRef.current.value !== passwordConfirmRef.current.value){
      console.log('hello')
      return setError('Passwords do not match')
    }

    try{
      setError('')
      setLoading(true)
      await signUP(emailRef.current.value, passwordRef.current.value)
    } catch(e){
      console.log(e)
      setError('Failed to create an account')
    }

    props.togglefun()
    setLoading(false)
  }
  return (
    <>
      <Card>
        <CardBody>
          <h2 className='text-centre mb-4' >Sign Up</h2>
          {error && <Alert color='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
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
            <Button disabled={loading} color='primary' className='w-100'>Sign Up</Button>
          </Form>
        </CardBody>
      </Card>
      <div className='w-100 text-centre mt-2'>Already have an account? Log In</div>
    </>
  )
}

