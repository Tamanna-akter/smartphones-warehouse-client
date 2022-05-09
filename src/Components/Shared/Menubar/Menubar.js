import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Menubar.css';

const Menubar = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar bg="info" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                <Navbar.Brand as={Link} to="/"> <span className="fw-bolder fs-4 fst-italic">Smartphones-Warehouse </span>
          </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link> <NavLink className="custom-nav-text" to="/home">Home</NavLink></Nav.Link>
                        <Nav.Link> <NavLink className="custom-nav-text" to="/managePhones">Manage Phones</NavLink></Nav.Link>

                             <Nav.Link> <NavLink className="custom-nav-text" to="/myItems">My items</NavLink></Nav.Link>
                    
                         <Nav.Link> <NavLink className="custom-nav-text" to="/additem">Add Item</NavLink></Nav.Link>
                        
                         <Nav.Link> <NavLink className="custom-nav-text" to="/blogs">Blogs</NavLink></Nav.Link>

                         {/* <Navbar.Text>
                                Hello! {user.displayName}
                            </Navbar.Text> */}
                                    {
                                user ?
                                    <button className='btn btn-dark text-white fw-bold text-decoration-none' onClick={handleSignOut}>Log Out</button>
                                    :
                                    <Nav.Link><NavLink className="custom-nav-text" to="/login">LogIn</NavLink></Nav.Link>}                
                               
                    
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};
    

export default Menubar;