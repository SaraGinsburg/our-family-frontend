  import React from 'react'

  import { Card } from 'react-bootstrap'
  import { Button } from 'react-bootstrap/'
  import { Image } from 'react-bootstrap'
  import ListGroup from 'react-bootstrap/ListGroup'

  const UserCard = ({user}) => {

    return (
      !user ? "" :

      <Card bg="dark" >
        <Card.Header>{user.attributes.first_name} {user.attributes.last_name}</Card.Header>

          <Card.Body>
            <Card.Subtitle>Birthdate: {user.attributes.birthdate}</Card.Subtitle>
            <Card.Subtitle>Points Earned: {user.attributes.points_earned}</Card.Subtitle>


            <Button variant="outline-primary">See my Milestones</Button>
            <Button variant="outline-primary">See my Nice Deeds</Button>
            <Button variant="outline-primary">See my Kind Words</Button>

        </Card.Body>
      </Card>



    )

  }


  export default UserCard
