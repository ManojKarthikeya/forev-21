import { Modal, Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Route, Routes, useAsyncError } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Favorites from "./Pages/Favorites";
import { useState } from "react";
import { AuthProvider } from "./contexts/AuthContext";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Profile from "./Components/Profile";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
	const [user, setUser] = useState(null);
	onAuthStateChanged(auth, (user) => {
		if (!user) {
			setUser(user)
		}
	});
	const [log, setLog] = useState(true);
	const [modal, setModal] = useState(false);
	const toggle = () => setModal(!modal);
	console.log(user)
	return (
		<AuthProvider>
			<div className="App">
				<Modal isOpen={modal} centered toggle={toggle}>
					{log ? (
						<SignIn log={log} setLog={setLog} togglefun={toggle} />
					) : (
						<SignUp log={log} setLog={setLog} togglefun={toggle} />
					)}
				</Modal>
				<Navbar>
					<NavbarBrand>Spandu & Manu</NavbarBrand>
					<Nav>
						<NavItem className="align-items-center">
							<NavLink className="text-black" onClick={toggle}>
								<i className="bi bi-person-fill mx-2"></i>Sign
								In
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="text-black">
								<i className="bi bi-heart-fill mx-1" />{" "}
								Favorites
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="text-black">
								<i className="bi bi-bag-fill mx-2"></i>Shopping
								Bag
							</NavLink>
						</NavItem>
					</Nav>
				</Navbar>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/favorites" element={<Favorites />} />
					<Route path="/profile" element={<Profile user={user} />} />
				</Routes>
			</div>
		</AuthProvider>
	);
}

export default App;
