  import React from 'react'

  import Card  from 'react-bootstrap/Card'
  import Button from 'react-bootstrap/Button'
  import Image from 'react-bootstrap/Image'
  import Container from 'react-bootstrap/Container'
  import Col from 'react-bootstrap/Col'
  import Row from 'react-bootstrap/Row'

  const UserCard = ({user}) => {

    return (
      !user ? "" :
      <Card bg="light" style={ {margin:'15px', flex: '0 1 24%'} } >
        <Card.Header><strong>{user.attributes.first_name} {user.attributes.last_name}</strong></Card.Header>
        <br></br>

        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Image src={user.attributes.picture} thumbnail />
            </Col>
          </Row>
        </Container>

          <Card.Body>


            <Card.Subtitle>Birthdate: {user.attributes.birthdate}</Card.Subtitle>
            <br></br>
            <Card.Subtitle>Points Earned: {user.attributes.points_earned}</Card.Subtitle>
            <br></br>


            <Button variant="outline-secondary">My Milestones</Button>
            <Button variant="outline-secondary">My Nice Deeds</Button>
            <Button variant="outline-secondary">My Kind Words</Button>

        </Card.Body>
      </Card>



    )

  }


  export default UserCard
