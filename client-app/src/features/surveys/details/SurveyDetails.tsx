import React, { useEffect, useState } from "react";
import { Grid, Label, List, Segment, Header, Button } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { Survey } from "../../../app/models/survey";
import { Link, useParams } from "react-router-dom";
import agent from "../../../app/api/agent";

export default function SurveyDashboard() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams<{ id: string }>();
  const [survey, setSurvey] = useState({} as Survey);

  useEffect(() => {
    setTimeout(() => {
      setSurvey(agent.Surveys.details(id) as Survey);
      setLoading(false);
    }, 1000);
  }, [setLoading, id]);

  if (loading)
    return <LoadingComponent content={`Loading ${survey.name}...`} />;

  return (
    <>
      <Grid textAlign="center">
        <Grid.Column computer={10} mobile={16}>
          <Segment clearing textAlign="left" raised>
            <Label color="blue" ribbon="right" size="large">
              {survey.name}
            </Label>

            {survey.questions.map((question, index) => {
              return (
                <Segment key={question.id}>
                  <Header as="h3">
                    Q{index + 1} : {question.title}
                    <Header.Subheader>{question.subTitle}</Header.Subheader>
                  </Header>
                  <List
                    divided
                    relaxed
                    animated
                    selection
                    verticalAlign="middle"
                    size="large"
                  >
                    {question.options.map((option, index) => {
                      return (
                        <List.Item key={option.id}>
                          <List.Content>
                            <List.Header>{option.text}</List.Header>
                          </List.Content>
                        </List.Item>
                      );
                    })}
                  </List>
                </Segment>
              );
            })}
            <Button floated="right" negative as={Link} to={`/surveys`}>
              Back
            </Button>
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  );
}
