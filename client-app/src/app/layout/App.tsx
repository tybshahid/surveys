import React from "react";
import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import { Route } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import SurveyDashboard from "../../features/surveys/dashboard/SurveyDashboard";
import SurveyDetails from "../../features/surveys/details/SurveyDetails";

function App() {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container style={{ marginTop: "7em" }}>
              <Route exact path="/surveys" component={SurveyDashboard} />
              <Route path="/surveys/:id" component={SurveyDetails} />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default App;
