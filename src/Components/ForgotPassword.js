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
      setMessage("Check your inbox for further instructions");
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
              <h2 className="display-6 mx-3 text-nowrap">Password Reset</h2>
            </Col>
            <Col className="text-sm-end">
              <h3>
                <i
                  // onClick={()=>{
                  //     props.toggleFun()

                  // }}
                  style={{ cursor: "pointer" }}
                  className="bi-bi-x"
                ></i>
              </h3>
            </Col>
          </Row>
        </CardHeader>
        <CardBody className="px-5">
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
        <CardFooter>
          <CardText className="mx-3 p-1">
            Already have an account?{" "}
            <CardLink
              onClick={() => {
                props.setLog("logIn");
              }}
            >
              Log in
            </CardLink>
          </CardText>
          <CardText className="mx-3 p-1">
            Don't have an account?{" "}
            <CardLink
              onClick={() => {
                props.setLog("signUp");
              }}
            >
              SignUp
            </CardLink>
          </CardText>
        </CardFooter>
      </Card>
    </React.Fragment>
  );
}
