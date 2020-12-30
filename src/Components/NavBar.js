import React from 'react'
import { Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePrescription } from '@fortawesome/free-solid-svg-icons'

const rx = <FontAwesomeIcon icon={faFilePrescription} />

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">{rx} ePharmacy</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#pharmacies">Find a Pharmacy</Nav.Link>
          <NavDropdown title="Products" id="basic-nav-dropdown">
            <NavDropdown.Item href="#prescriptions">Prescriptions</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Help</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <Button variant="outline-success">Login</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
