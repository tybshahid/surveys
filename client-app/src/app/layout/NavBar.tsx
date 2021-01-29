import React from "react";
import { Container, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} exact to="/" header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: "10px" }}
          />
          Compass Surveys
        </Menu.Item>
        <Menu.Item as={NavLink} to="/surveys" name="Surveys" />
      </Container>
    </Menu>
  );
}
