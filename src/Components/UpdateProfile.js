import { updatePassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
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

export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updatePassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const [agree, setAgree] = useState(false);

function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setError("");
    setLoading(true);
    if(passwordRef.current.value){
        promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises).then(()=>{
        console.log('comeonn')
        navigate('/')
    }).catch(()=>{
        setError('Failed to update account')
    }).finally(()=>{
        setLoading(false);
    })
    
  }
  return (
    <React.Fragment>
      <Card>
        <CardHeader>
          <Row>
            <Col>
              <h2 className="display-6 mx-3">Update Profile</h2>
            </Col>
            <Col className="text-sm-end">
              {/* <h3>
                <i
                  onClick={() => {
                    props.togglefun();
                  }}
                  style={{ cursor: "pointer" }}
                  className="bi bi-x "
                ></i>
              </h3> */}
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
                defaultValue={currentUser.email}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                id="password"
                innerRef={passwordRef}
                placeholder="Leave blank to keep the same"
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="password-confirmation">Password confirmation</Label>
              <Input
                type="password"
                id="password-confirmation"
                innerRef={passwordConfirmRef}
                placeholder="Leave blank to keep the same"
              ></Input>
            </FormGroup>
            <Row className="d-flex justify-content-center">
              <Button disabled={loading} color="success" className=" w-75 my-2">
                Update
              </Button>
            </Row>
          </Form>
        </CardBody>
        <CardFooter>
          <CardText className="mx-3 p-1">
            {" "}
            <CardLink
            //   onClick={() => {
            //     props.setLog("logIn");
            //   }} style={{cursor:"pointer"}}
            
            >
              Cancel
            </CardLink>
          </CardText>
        </CardFooter>
      </Card>
    </React.Fragment>
  );
}
