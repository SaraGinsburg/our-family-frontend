import  React  from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card,  CardBody, CardLink, CardTitle} from 'reactstrap';




const MyMilestones = props => {
  const milestoneCards = props.milestones.length > 0 ?
    props.milestones.map(m => (<p key={m.id}>
                                <Link to={`/milestones/${m.id}`}>{m.attributes.heading}</Link>
                              </p>)):
    null

  const handleClickandSort = () => {
    const milestoneCards = [...props.milestones]
      .sort((a, b) => (a.attributes.heading > b.attributes.heading) ? 1 : -1)
      .map(m => (<p key={m.id}>
                  <Link to={`/milestones/${m.id}`}>{m.attributes.heading}</Link>
               </p>))
               console.log("sorted", milestoneCards)
  }

    return (
      <div className="MilestoneCards">
        {
            <Card>
              <CardBody>
                <CardTitle><h4>My Milestones</h4></CardTitle>
                <button onClick={handleClickandSort}>Sort</button>
                {milestoneCards}
              </CardBody>
            </Card>

        }
      </div>
    );

}

const mapStateToProps = state => {
  return {
    milestones: state.myMilestones
  }
}

export default connect(mapStateToProps)(MyMilestones)
