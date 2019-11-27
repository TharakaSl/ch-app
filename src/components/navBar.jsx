import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Common Health</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#hInfo">Health Information</Nav.Link>
      <Nav.Link href="#hCare">Primary Health Care</Nav.Link>
      <Nav.Link href="#hFinance">Health Financing</Nav.Link>
      <Nav.Link href="#mMembership">Manage Membership</Nav.Link>
    </Nav>
  </Navbar.Collapse>
            </Navbar>
         );
    }
}
 
export default NavBar;