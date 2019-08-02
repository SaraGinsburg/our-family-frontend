import  React  from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card,  CardBody, CardLink, CardTitle} from 'reactstrap';

class Counter extends React.Component {
  state = {
    count: 0
  }
  handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }))
  }
  render(){
    return <button onClick={this.handleClick}>{this.state.count}</button>
  }
}


const MyMilestones = props => {
  const milestoneCards = props.milestones.length > 0 ?
    props.milestones.map(m => (<p key={m.id}>
                                <Link to={`/milestones/${m.id}`}>{m.attributes.heading}</Link>
                                  <Counter />
                              </p>)):
    null

    // return  milestoneCards

    return (
      <div className="MilestoneCards">
        {
            <Card>
              <CardBody>
                <CardTitle><h4>My Milestones</h4></CardTitle>
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
