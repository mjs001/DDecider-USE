import React from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";
const generalStyles = () => {
  return (
    <div>
      <Card body outline color="danger">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>
          With supporting text below as a natural lead-in to additional content.
        </CardText>
        <Button>Button</Button>
      </Card>
    </div>
  );
};

export default generalStyles;
