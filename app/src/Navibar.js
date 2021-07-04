import React from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown, Nav } from "react-bootstrap";

class Navibar extends React.Component {
  render() {
    return <RenderBarElement />;
  }
}

function RenderBarElement() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>コーディング時間</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <DropdownMenu />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

function DropdownMenu() {
  return (
    <NavDropdown title="account menu" id="cnav-dropdown">
      <DropdownElemnt name="register" />
      <DropdownElemnt name="change account" />
    </NavDropdown>
  );
}

function DropdownElemnt(props) {
  return <NavDropdown.Item>{props.name}</NavDropdown.Item>;
}

export default Navibar;
