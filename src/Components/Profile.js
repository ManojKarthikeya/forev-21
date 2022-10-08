import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Button } from "reactstrap";
// import Orders from "./Orders";

export default function Profile(props) {
  return (
    <div>
      <Link to="orders">
        <Button>Orders</Button>
      </Link>
      <Link to="settings">
        <Button>Settings</Button>
      </Link>
      <Outlet />
    </div>
  );
}
