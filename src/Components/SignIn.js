import React from "react";
import { Card, CardBody, CardFooter, CardHeader, CardLink, CardText, Col, Row } from "reactstrap";

export default function SignIn(props) {
<<<<<<< HEAD
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
              innerRef={emailRef} required
              ></Input>
            </FormGroup>
            <FormGroup >
              <Label for='password'>Password</Label>
              <Input type= 'password' id='password' 
              innerRef={passwordRef} required
              ></Input>
            </FormGroup>
            <FormGroup >
              <Label for='password-confirmation'>Password confirmation</Label>
              <Input type= 'password' id='password-confirmation' 
              innerRef={passwordConfirmRef} required
              ></Input>
            </FormGroup>
            <Button disabled={loading} color='primary' className='w-100'>Sign Up</Button>
          </Form>
        </CardBody>
      </Card>
      <div className='w-100 text-centre mt-2'>Already have an account? Log In</div>
    </>
  )
=======
	return (
		<React.Fragment>
			<Card>
				<CardHeader>
					<Row>
						<Col>
							<h2 className="display-6 mx-3">Log in</h2>
						</Col>
						<Col className="text-sm-end">
							<h3>
								<i
									onClick={() => {
										props.togglefun();
									}}
									style={{ cursor: "pointer" }}
									className="bi bi-x "
								></i>
							</h3>
						</Col>
					</Row>
				</CardHeader>
				<CardBody className="px-5">hehe</CardBody>
				<CardFooter>
					<CardText className="mx-3 p-1">
						Don't have an account?{" "}
						<CardLink
							onClick={() => {
								props.setLog(!props.log);
							}}
						>
							Register
						</CardLink>
					</CardText>
				</CardFooter>
			</Card>
		</React.Fragment>
	);
>>>>>>> 443d19b567381f9c53f88674abda1bb66021ea82
}
