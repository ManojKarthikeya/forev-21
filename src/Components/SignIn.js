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

export default function SignIn(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { logIn } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      console.log('logging in')
      await logIn(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to log in");
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
        <CardBody className="px-5">
          {error && <Alert color="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" id="email" innerRef={emailRef}></Input>
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                id="password"
                innerRef={passwordRef}
              ></Input>
            </FormGroup>
            <Row className="d-flex justify-content-center">
            <Button disabled={loading} color="success" className="w-75 my-2">
              Log In
            </Button>
          </Row>
          </Form>
        </CardBody>
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
}
