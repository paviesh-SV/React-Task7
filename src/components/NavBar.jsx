import { Link } from "react-router-dom";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";


function NavBar() {

    return (
        <Navbar expand="lg" variant="dark" bg="dark" className="d-flex">
            <Navbar.Brand as={Link} to="/">
                Library Manangement
            </Navbar.Brand>
            <Navbar.Collapse id="navbar">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link as={Link} to="/Author">
                            Add Author
                        </Nav.Link>
                    </Nav.Item>


                    <Nav.Item>
                        <Nav.Link as={Link} to="/Books">
                            Add Books
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link as={Link} to="/AuthorRecords">
                            Author Records
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link as={Link} to="/BooksRecords">
                            Books Records
                        </Nav.Link>
                    </Nav.Item>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar