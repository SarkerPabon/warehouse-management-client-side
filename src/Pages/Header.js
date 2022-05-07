import { signOut } from "firebase/auth";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../firebase.init";

const Header = () => {
	const [user] = useAuthState(auth);

	const navLinkStyles = ({ isActive }) => {
		return {
			borderBottom: isActive ? "1px solid white" : "",
			fontWeight: isActive ? "bold" : "normal",
		};
	};

	return (
		<Navbar bg='secondary' expand='lg'>
			<Container>
				<Navbar.Brand as={Link} to='/' className='text-white'>
					Navbar scroll
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='navbarScroll' />
				<Navbar.Collapse id='navbarScroll'>
					<Nav
						className='ms-auto my-2 my-lg-0'
						style={{ maxHeight: "100px" }}
						navbarScroll
					>
						<Nav.Link
							as={NavLink}
							to='/'
							className='text-white'
							style={navLinkStyles}
						>
							Home
						</Nav.Link>
						{user ? (
							<>
								<Nav.Link
									as={NavLink}
									to='/products'
									className='text-white'
									style={navLinkStyles}
								>
									Manage Products
								</Nav.Link>
								<Nav.Link
									as={NavLink}
									to='/myProducts'
									className='text-white'
									style={navLinkStyles}
								>
									{user.displayName ? user.displayName + " " : "My "} Products
								</Nav.Link>
								<Nav.Link
									as={NavLink}
									to='/addProduct'
									className='text-white'
									style={navLinkStyles}
								>
									Add Product
								</Nav.Link>
								<button
									onClick={() => signOut(auth)}
									className='btn btn-primray btn-link text-white text-decoration-none'
								>
									Sign Out
								</button>
							</>
						) : (
							<>
								<Nav.Link
									as={NavLink}
									to='/register'
									className='text-white'
									style={navLinkStyles}
								>
									Register
								</Nav.Link>
								<Nav.Link
									as={NavLink}
									to='/login'
									className='text-white'
									style={navLinkStyles}
								>
									Login
								</Nav.Link>
							</>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
