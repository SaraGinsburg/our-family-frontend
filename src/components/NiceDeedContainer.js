import React from 'react'
import { Card,  CardBody, CardLink, CardTitle} from 'reactstrap';
import { Button } from 'react-bootstrap';

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const NiceDeedContainer = ({currentUser, loggedIn }) => {
  return (
    <div className="NiceDeedContainer">
      {

          <Card>
            <CardBody>
              <CardTitle><h4>NiceDeeds</h4></CardTitle>

              <Link to="/NiceDeeds">
              <Button variant="outline-secondary">View Nice Deeds</Button>
              </Link>

              <Link to="/NiceDeeds/new">
              <Button variant="outline-secondary">Add A New Nice Deed</Button>
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
export default connect(mapStateToProps)(NiceDeedContainer);
