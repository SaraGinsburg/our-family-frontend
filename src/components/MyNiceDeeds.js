import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card,  CardBody, CardLink, CardTitle} from 'reactstrap';


const MyNiceDeeds = props => {
console.log("props:", props, "niceDeeds:", props.niceDeeds)
  const niceDeedCards = props.niceDeeds.length > 0 ?
    props.niceDeeds.map(n => (<p key={n.id}><Link to={`/niceDeeds/${n.id}`}>{n.attributes.heading}</Link></p>)):
    null

    // return  niceDeedCards

    return (
      <div className="NiceDeedCards">
        {
            <Card>
              <CardBody>
                <CardTitle><h4>My NiceDeeds</h4></CardTitle>
                {niceDeedCards}
              </CardBody>
            </Card>

        }
      </div>
    );

}

const mapStateToProps = state => {
  return {
    NiceDeeds: state.myNiceDeeds
  }
}

export default connect(mapStateToProps)(MyNiceDeeds)
