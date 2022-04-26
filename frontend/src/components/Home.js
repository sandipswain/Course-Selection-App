import React from "react";
import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";
function Home() {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Course Application</CardTitle>
          <CardText>
            This is a FullStack Web Application made with ReactJs and SpringBoot
          </CardText>
          <Button>Start Learning</Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default Home;
