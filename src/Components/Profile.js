import React from "react";
import { Route, Routes, Outlet, Link } from "react-router-dom";
import Orders from "./Orders";

export default function Profile(props) {
	return (
		<div>
      <Link to='orders'>Orders</Link>
      <Link to='settings'>Settings</Link>
      <Outlet />
		</div>
	);
}
