import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
const Course = ({ courseName, courseDuration, teacherName }) => {
  return (
    <Container className="container mt-40 flex gap-4">
      <Card className="text-center">
        <Card.Body>
          <h1>course name: {courseName}</h1>
          <h1>duration: {courseDuration}</h1>
          <h1>teacher Name: {teacherName}</h1>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Course;
