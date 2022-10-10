import { Modal, Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Favorites from "./Pages/Favorites";
import { useEffect, useState } from "react";
import { AuthProvider } from "./contexts/AuthContext";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Profile from "./Components/Profile";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseinitial";
import Orders from "./Components/Orders";
import AccountSettings from "./Components/AccountSettings";
import ForgotPassword from "./Components/ForgotPassword";
import Categories from "./Pages/Categories";
import Bag from "./Pages/Bag";
import List from "./Pages/List";
import ProductPage from "./Components/ProductPage";
import UpdateProfile from "./Components/UpdateProfile";


function App() {
	const [user, setUser] = useState(null);
	const location = useLocation();
	useEffect(() => {
		onAuthStateChanged(auth, (userProf) => {
			if (userProf && !user) {
				setUser(userProf);
			} else if (!userProf && user) {
				setUser(null);
			}
		});
	}, [location, user]);

	const [log, setLog] = useState("logIn");
	const [modal, setModal] = useState(false);
	const toggle = () => {
		setModal(!modal);
		setLog("logIn");
	};
	return (
		<AuthProvider>
			<div className="App">
				<Modal isOpen={modal} centered toggle={toggle}>
					{log === "logIn" ? (
						<SignIn log={log} setLog={setLog} togglefun={toggle} />
					) : log === "signUp" ? (
						<SignUp log={log} setLog={setLog} togglefun={toggle} />
					) : (
						<ForgotPassword
							log={log}
							setLog={setLog}
							togglefun={toggle}
						/>
					)}
				</Modal>
				<Navbar>
					<div className="d-flex align-items-center">
						<NavbarBrand className="mx-2 me-4" href="/">
							Spandu & Manu
						</NavbarBrand>
						<Categories />
					</div>
					<Nav>
						<NavItem className="align-items-center">
							{user ? (
								<NavLink>
									<Link
										style={{
											cursor: "pointer",
											textDecoration: "none",
											fontSize: "15px",
											fontWeight: "600",
										}}
										className="text-secondary"
										to="/profile"
									>
										<i className="bi bi-person-fill mx-2"></i>{" "}
										My Account
									</Link>
								</NavLink>
							) : (
								<NavLink
									style={{
										cursor: "pointer",
										fontSize: "15px",
										fontWeight: "600",
									}}
									className="text-secondary"
									onClick={toggle}
								>
									<i className="bi bi-person-fill mx-2"></i>
									Sign In
								</NavLink>
							)}
						</NavItem>
						<NavItem>
						<NavLink>
								<Link
									to="/favorites"
									className="text-secondary"
									style={{
										textDecoration: "none",
										fontSize: "15px",
										fontWeight: "600",
									}}
								>
									<i className="bi bi-heart-fill mx-2"></i>
									Favorites
								</Link>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink>
								<Link
									to="/my-bag"
									className="text-secondary"
									style={{
										textDecoration: "none",
										fontSize: "15px",
										fontWeight: "600",
									}}
								>
									<i className="bi bi-bag-fill mx-2"></i>
									Shopping Bag
								</Link>
							</NavLink>
						</NavItem>
					</Nav>
				</Navbar>
				<Routes>
					<Route path="" element={<Homepage />} />
					<Route path="favorites" element={<Favorites />} />
					<Route path="profile" element={<Profile user={user} />}>
						<Route path="orders" element={<Orders />} />
						<Route path="settings" element={<AccountSettings />} >
							<Route path="updateProfile" element={<UpdateProfile/>}/>
						</Route>
					</Route>
					<Route path="my-bag" element={<Bag />} />
					<Route path="/products/:id" element={<List />} />
					<Route
						path="product/:id"
						element={<ProductPage user={user} togglefun={toggle} />}
					/>
				</Routes>
			</div>
		</AuthProvider>
	);
}

export default App;
