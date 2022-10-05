import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";

function App() {
	return (
		<div className="App">
			<Navbar>
        <NavbarBrand>
          Spandu & Manu
        </NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink>Sign In</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Favorites</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Shopping Bag</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
		</div>
	);
}

export default App;
