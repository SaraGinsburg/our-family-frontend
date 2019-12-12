import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap'


class Home extends Component {

  render() {
    return (
      <Container>
        <Jumbotron>
          <h2>Welcome to Our Family!</h2>
        </Jumbotron>
          <Link to="/signup">
            <Button variant="outline-secondary">Sign Up</Button>
          </Link>
          <Link to="/login">
            <Button variant="outline-secondary">Log In</Button>
          </Link>
      </Container>
    )
  }
}

export default Home;
