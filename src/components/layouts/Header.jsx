import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">Todo List</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/welcome/danu">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/todos">Todos</NavLink>
          </NavItem>
        </Nav>
        <Nav className="justify-content-end" navbar>
          <NavItem>
            <NavLink href="/login">Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/logout">Logout</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
