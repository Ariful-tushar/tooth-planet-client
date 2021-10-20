import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { HashLink } from "react-router-hash-link";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="tp-brand-name" as={HashLink} to="/home#home">
            Tooth Planet
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#services">
              Services
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#specialists">
              Secialists
            </Nav.Link>
            <Nav.Link as={HashLink} to="/contact">
              Contact Us
            </Nav.Link>
            <Nav.Link as={HashLink} to="/about">
              About Us
            </Nav.Link>
            {user?.email ? (
              <Button className="mx-1" onClick={logOut}>
                Log Out
              </Button>
            ) : (
              <span>
                <Nav.Link className="tp-login" as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link className="tp-login" as={Link} to="/register">
                  Register
                </Nav.Link>
              </span>
            )}
            {user?.email ? (
              <Navbar.Text>
                Signed in as:
                <a className="text-decoration-none" href="#login">
                  {user.displayName}
                </a>
              </Navbar.Text>
            ) : (
              <Navbar.Text></Navbar.Text>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
