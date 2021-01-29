import React from "react";
import { Link } from "react-router-dom";
import { Container, Header, Segment, Image, Button } from "semantic-ui-react";

export default function HomePage() {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <Header as={"h1"} inverted>
          <Image
            size="massive"
            src="/assets/logo.png"
            alt="logo"
            style={{ marginBottom: 12 }}
          />
          Compass Surveys
        </Header>
        <Header as="h2" inverted content="Welcome to Surveys" />
        <Button as={Link} to="/surveys" size="huge" inverted>
          Take me to the Surveys!
        </Button>
      </Container>
    </Segment>
  );
}
