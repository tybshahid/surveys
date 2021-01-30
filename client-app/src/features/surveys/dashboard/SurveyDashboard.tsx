import React, { useEffect, useState } from "react";
import { Grid, Label, List, Segment, Header } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { Survey } from "../../../app/models/survey";
import { Link } from "react-router-dom";
import agent from "../../../app/api/agent";

export default function SurveyDashboard() {
  const [loading, setLoading] = useState(true);
  const [surveys, setSurveys] = useState([] as Survey[]);

  useEffect(() => {
    setTimeout(() => {
      setSurveys(agent.Surveys.list());
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <LoadingComponent content="Loading Surveys..." />;

  return (
    <>
      <Grid textAlign="center">
        <Grid.Column computer={6} mobile={16}>
          <Segment clearing textAlign="left" raised>
            <Label color="teal" ribbon="right" size="large">
              Available Surveys
            </Label>
            <List
              divided
              relaxed
              animated
              selection
              verticalAlign="middle"
              size="large"
            >
              {surveys.map((survey, index) => {
                return (
                  <List.Item
                    key={survey.id}
                    as={Link}
                    to={`/surveys/${survey.id}`}
                  >
                    <List.Icon name="tag" size="large" verticalAlign="middle" />
                    <List.Content>
                      <List.Header>
                        <Header color="blue" size="small">
                          Survey {index + 1}
                        </Header>
                      </List.Header>
                      <List.Description>{survey.name}</List.Description>
                    </List.Content>
                  </List.Item>
                );
              })}
            </List>
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  );
}
