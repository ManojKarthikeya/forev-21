import { Modal, Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import SignIn from "./Components/SignIn";
import { useState } from "react";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
	const [modal, setModal] = useState(false);
	const toggle = () => setModal(!modal)
	return (
		<AuthProvider>
					<div className="App">
			<Modal isOpen={modal} toggle={toggle} > <SignIn /> </Modal>
			<Navbar>
				<NavbarBrand>Spandu & Manu</NavbarBrand>
				<Nav>
					<NavItem className="align-items-center">
						<NavLink className="text-black" onClick={toggle}>
							<i className="bi bi-person-fill mx-2"></i>Sign In
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className="text-black">
							<i className="bi bi-heart-fill mx-1" /> Favorites
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className="text-black">
							<i className="bi bi-bag-fill mx-2"></i>Shopping Bag
						</NavLink>
					</NavItem>
				</Nav>
			</Navbar>
			
		</div>
		</AuthProvider>
	);
}

export default App;
