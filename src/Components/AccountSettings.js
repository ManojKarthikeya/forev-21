import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Alert, Button, Container } from "reactstrap";
import { useAuth } from "../contexts/AuthContext";
import UpdateProfile from "./UpdateProfile";

export default function AccountSettings() {
  const [error, setError] = useState(``);
  const navigate = useNavigate();
  async function handleLogout() {
    setError("");
    try {
      await logOut();
      navigate("/");
    } catch {
      setError("Failed to log out");
    }
  }
  const { logOut } = useAuth();
  return (
    <div>
      <Container>
        <Link to="updateProfile"><Button>Update Profile</Button></Link>
        <Button color="primary" onClick={handleLogout}>
          Log Out
        </Button>
        {error && <Alert color="danger">{error}</Alert>}
        <Outlet/>
      </Container>
    </div>
  );
}
