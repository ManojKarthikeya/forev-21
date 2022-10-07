import React, { useState } from "react";
// import { Link } from 'react-router-dom'
import { Button, ButtonGroup, Container } from "reactstrap";

export default function Orders() {
  // const count = 0
  const [clicked, setClicked] = useState(true);
  return (
    <div>
      <Container>
        <h2>My Purchases</h2>
        <ButtonGroup>
          <Button
            className="m-2"
            onClick={() => {
              setClicked(true);
            }}
          >
            In processing
          </Button>
          <Button
            className=" m-2"
            onClick={() => {
              setClicked(false);
            }}
          >
            Past Orders
          </Button>
        </ButtonGroup>
        {clicked ? <div>PresentOrders</div> : <div>Past Orders</div>}
      </Container>
    </div>
  );
}
