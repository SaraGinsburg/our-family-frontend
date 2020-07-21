import React from 'react'
import { Card,  CardBody, CardTitle} from 'reactstrap';
import { Button } from 'react-bootstrap';

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const KindWordContainer = ({currentUser, loggedIn }) => {
  return (
    <div className="KindWordContainer">
      {

          <Card>
            <CardBody>
              <CardTitle><h4>KindWords</h4></CardTitle>

              <Link to="/KindWords">
              <Button variant="outline-secondary">View Kind Words</Button>
              </Link>

              <Link to="/KindWords/new">
              <Button variant="outline-secondary">Add A New Kind Word</Button>
              </Link>
            </CardBody>
          </Card>

      }
    </div>
  );
};
const mapStateToProps = ({currentUser}) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}
export default connect(mapStateToProps)(KindWordContainer);
