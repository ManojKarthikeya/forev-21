import React, { useRef, useState } from "react";
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardLink,
  CardText,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { useAuth } from "../contexts/AuthContext";
// import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

export default function SignUp(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signUP } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // const [agree, setAgree] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      console.log("hello");
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signUP(emailRef.current.value, passwordRef.current.value);
    } catch (e) {
      // console.log(e);
      setError("Failed to create an account");
    }

    props.togglefun();
    setLoading(false);
  }
  return (
    <React.Fragment>
      <Card>
        <CardHeader>
          <Row>
            <Col>
              <h2 className="display-6 mx-3">Register</h2>
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
        <CardBody className="px-5">
          {error && <Alert color="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                id="email"
                innerRef={emailRef}
                required
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                id="password"
                innerRef={passwordRef}
                required
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="password-confirmation">Password confirmation</Label>
              <Input
                type="password"
                id="password-confirmation"
                innerRef={passwordConfirmRef}
                required
              ></Input>
            </FormGroup>
            <Row className="d-flex justify-content-center">
              <Button disabled={loading} color="success" className=" w-75 my-2">
                Register
              </Button>
            </Row>
          </Form>
        </CardBody>
        <CardFooter>
          <CardText className="mx-3 p-1">
            Already have an account?{" "}
            <CardLink
              onClick={() => {
                props.setLog(!props.log);
              }}
            >
              Log in
            </CardLink>
          </CardText>
        </CardFooter>
      </Card>
    </React.Fragment>
  );
}
