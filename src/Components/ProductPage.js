import React, { useState } from "react";
import {
  Col,
  Badge,
  ButtonGroup,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Table,
  CardTitle,
  CardBody,
  Card,
  Container,
  Alert,
  Row,
  ButtonToggle,
} from "reactstrap";
import { productData } from "../data/productData";
// import ReactHtmlParser from "react-html-parser";

export default function ProductPage(props) {
  const [btclick, setBtclick] = useState(1)	
//   const [log, setLog] = useState("");
  let tmp = document.createElement("DIV");
  tmp.innerHTML = productData.product.Description;
  const details = tmp.innerText.split("}").pop().split(".");
  //    console.log(tmp.innerText.split('}').pop().split('.'))
  //   const parsedReact = ReactHtmlParser(productData.product.Description);
  //   console.log(parsedReact);
  const [modal, setModal] = useState(false);
  const ButtonHandler = (index)=>{
	setBtclick(index)
  }
  const toggle = () => setModal(!modal);
  return (
    <div className="p-4">
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Size Chart</ModalHeader>
        <ModalBody>
          <Table>
            <thead>
              <th>Size</th>
              <th>To Fit Bust (in)</th>
              <th>To Fit Waist (in)</th>
              <th>Front Length (in)</th>
            </thead>
            <tbody>
              <tr>
                <td>S</td>
                <td>36.5</td>
                <td>30.5</td>
                <td>32.0</td>
              </tr>
              <tr>
                <td>M</td>
                <td>38.5</td>
                <td>31.5</td>
                <td>32.0</td>
              </tr>
              <tr>
                <td>L</td>
                <td>40.5</td>
                <td>32.5</td>
                <td>32.0</td>
              </tr>
              <tr>
                <td>XL</td>
                <td>42.5</td>
                <td>33.5</td>
                <td>32.0</td>
              </tr>
              <tr>
                <td>XXL</td>
                <td>44.5</td>
                <td>35.0</td>
                <td>32.0</td>
              </tr>
            </tbody>
          </Table>
        </ModalBody>
      </Modal>
      <Container>
        <Row>
          <div className="d-flex justify-content-center">
            <Col>
              <img
                style={{ maxHeight: "80vh" }}
                src={productData.product.DefaultProductImage}
                alt="product"
              ></img>
            </Col>
            <Col className="col-8">
              <Row>
                <div style={{ fontWeight: "700", fontSize: "28px" }}>
                  {productData.product.DisplayName}
                  <span
                    className="m-2"
                    style={{
                      fontWeight: "600",
                      fontSize: "15px",
                      color: "gray",
                    }}
                  >
                    {productData.product.Brand}
                  </span>
                </div>

                <div>
                  <div style={{ fontWeight: "700", fontSize: "28px" }}>
                    ${productData.product.ListPrice}{" "}
                    {productData.product.FinalSale ? (
                      <span>
                        <Badge
                          style={{ fontSize: "13px", fontWeight: "500" }}
                          color="danger"
                        >
                          Sale
                        </Badge>
                      </span>
                    ) : null}
                    <div
                      style={{
                        fontWeight: "700",
                        fontSize: "15px",
                        color: "gray",
                      }}
                    >
                      {productData.product.Promotions[0].Message}
                    </div>
                  </div>

                  <Row className="m-2 my-3">
                    <Col>
                      <div
                        style={{
                          fontWeight: "600",
                          fontSize: "20px",
                          color: "gray",
                        }}
                      >
                        Select Size{" "}
                        <i
                          style={{ cursor: "pointer" }}
                          color="info"
                          onClick={toggle}
                          class="bi bi-info-circle-fill"
                        ></i>
                      </div>
                      <ButtonGroup>
                        <Button active={btclick===1} onClick={()=>{ButtonHandler(1)}} color="secondary" outline>
                          S
                        </Button>
                        <Button active={btclick===2} onClick={()=>{ButtonHandler(2)}} color="secondary" outline>
                          M
                        </Button>
                        <Button active={btclick===3} onClick={()=>{ButtonHandler(3)}} color="secondary" outline>
                          L
                        </Button>
                        <Button active={btclick===4} onClick={()=>{ButtonHandler(4)}} color="secondary" outline>
                          XL
                        </Button>
                        <Button active={btclick===5} onClick={()=>{ButtonHandler(5)}} color="secondary" outline>
                          XXL
                        </Button>
                      </ButtonGroup>
                      {/* <div>
                        <Button color="info" onClick={toggle}>
                          Size Chart
                        </Button>
                      </div> */}
                    </Col>

                    <Col>
                      <div>
                        <div
                          style={{
                            fontWeight: "600",
                            fontSize: "20px",
                            color: "gray",
                          }}
                        >
                          Reviews (121)
                        </div>
                        <div
                          style={{
                            fontWeight: "600",
                            fontSize: "20px",
                            color: "gray",
                          }}
                        >
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-half"></i> 4.5
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="d-flex m-3">
                    {props.user ? (
                      <Button color="danger">
                        <i class="bi bi-bag"></i> Add to Shopping Bag
                      </Button>
                    ) : (
                      <Button
                        onClick={() => {
                          props.togglefun();
                          props.setLog("logIn");
                        }}
                      >
                        Sign In to start Shopping!
                      </Button>
                    )}
                    <Button color="secondary" className="mx-3">
                      <i class="bi bi-heart"></i> Add to Favourites
                    </Button>
                  </div>
                </div>
              </Row>
              <div
                style={{
                  fontWeight: "700",
                  fontSize: "20px",
                  color: "black",
                }}
              >
                Product Details
              </div>
              <Row>
                <Col>
                  <div
                    className="text-secondary "
                    style={{ fontWeight: "600" }}
                  >
                    <ul>
                      {details[0] ? (
                        <li>{details[0].replace("Details", "")}</li>
                      ) : null}
                      {details[1] ? (
                        <li>{details[1].replace("-", "")}</li>
                      ) : null}
                      {details[2] ? (
                        <li>{details[2].replace("Content + Care-", "")}</li>
                      ) : null}
                    </ul>
                  </div>
                  {/* {parsedReact[1]}
                    {parsedReact[2]}
                    {parsedReact[3]} */}
                  {/* <div style={{
                      fontWeight: "600",
                      fontSize: "20px",
                      color: "gray",
                    }}>{parsedReact[1].props.children[0].props.children[0]}</div>
					<div>{parsedReact[1].props.children[1].props.children[0]}</div> */}
                  {/* <div>{parsedReact[1].props.children[1].props.children[1].props.children[0]}</div> */}
                </Col>
              </Row>
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
}
