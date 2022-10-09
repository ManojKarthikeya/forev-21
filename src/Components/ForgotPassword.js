import React, { useRef, useState } from "react";
import {
	Alert,
	Card,
	CardBody,
	CardHeader,
	Col,
	Form,
	FormGroup,
	Label,
	Row,
	Input,
	Button,
	CardLink,
	CardText,
	CardFooter,
} from "reactstrap";
import { useAuth } from "../contexts/AuthContext";
// import {Link} from 'react-router-dom'

export default function ForgotPassword(props) {
  const [clicked, setClicked] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [loading, setLoading] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage(
        "Check your inbox for further instructions and re-log in with your new password"
      );
      setClicked(false);

    } catch {
      setError("Failed to reset password");
    }
    setLoading(false);
    
  }
  return (
    <React.Fragment>
      <Card>
        <CardHeader>
        <Row>
            <Col>
              <h2 className="display-6 mx-3 text-nowrap">Password reset</h2>
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
        {clicked ? (
          <CardBody className="px-5">
            {message && <Alert color="success">{message}</Alert>}
            {error && <Alert color="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" id="email" innerRef={emailRef}></Input>
              </FormGroup>
              <div className="d-flex justify-content-center">
                <Button disabled={loading} color="success" className="w-75">
                  Reset Password
                </Button>
              </div>
            </Form>
          </CardBody>
        ) : (
          <CardBody>
            {message && <Alert color="success">{message}</Alert>}
            <div className="d-flex justify-content-center">
            <Button
              onClick={() => {
                props.setLog("logIn");
              }}
             color='success' className="w-75">
              Re-LogIn
            </Button>
            </div>
          </CardBody>
        )}
        { clicked? <CardFooter>
          {/* <CardText className="mx-3 p-1">
            Already have an account?{" "}
            <CardLink
              onClick={() => {
                props.setLog("logIn");
              }}
            >
              Log in
            </CardLink>
          </CardText> */}
          <CardText className="mx-3 p-1">
            Don't have an account?{" "}
            <CardLink
              onClick={() => {
                props.setLog("signUp");
              }}
             style={{cursor:"pointer"}}>
              Register
            </CardLink>
          </CardText>
        </CardFooter> : null}
      </Card>
    </React.Fragment>
  );
}
