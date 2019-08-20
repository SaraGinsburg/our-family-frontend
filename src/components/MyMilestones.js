import  React  from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card,  CardBody,  CardTitle} from 'reactstrap';





  class MyMilestones extends React.Component  {

    state = {
      sortClicked: true
    }


    milestoneCards = () => { return(
      this.props.milestones.length > 0 ?
      this.props.milestones.map(m => (<p key={m.id}>
                              <Link to={`/milestones/${m.id}`}>{m.attributes.heading}</Link>
                            </p>))
                            :null
                          )}




    sortedMilestoneCards = () => { return(
      [...this.props.milestones]
     .sort((a, b) => (a.attributes.heading > b.attributes.heading) ? 1 : -1)
     .map(m => (<p key={m.id}>
                     <Link to={`/milestones/${m.id}`}>{m.attributes.heading}</Link></p>)))}

    handleOnClick = (event) => {

      console.log("before", this.state.sortClicked)
      this.setState({sortClicked: !this.state.sortClicked})

      console.log("after", this.state.sortClicked)
    }

    render() {
    return (
      <div className="MilestoneCards">
        {
          <Card>
            <CardBody>
              <CardTitle><h4>My Milestones</h4></CardTitle>
              <button
                onClick={this.handleOnClick}
                 >Sort</button>
              {this.state.sortClicked ?  this.sortedMilestoneCards() : this.milestoneCards()}
            </CardBody>
          </Card>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    milestones: state.myMilestones
  }
}

export default connect(mapStateToProps)(MyMilestones)
