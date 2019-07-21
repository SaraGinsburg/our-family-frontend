import React from 'react'
import { Card,  CardBody, CardLink, CardTitle} from 'reactstrap';
import { Button } from 'react-bootstrap';

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const MilestoneContainer = ({currentUser, loggedIn }) => {
  return (
    <div className="MilestoneContainer">
      {

          <Card>
            <CardBody>
              <CardTitle><h4>Milestones</h4></CardTitle>

              <Link to="/milestones">
              <Button variant="outline-secondary">View Milestones</Button>
              </Link>

              <Link to="/milestones/new">
              <Button variant="outline-secondary">Add A New Milestone</Button>
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
export default connect(mapStateToProps)(MilestoneContainer);
