import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card,  CardBody, CardLink, CardTitle} from 'reactstrap';


const MyKindWords = props => {

  const kindWordCards = props.kindWords.length > 0 ?
    props.kindWords.map(k => (<p key={k.id}><Link to={`/kindWords/${k.id}`}>{k.attributes.heading}</Link></p>)):
    null

    // return  kindWordCards

    return (
      <div className="KindWordCards">
        {
            <Card>
              <CardBody>
                <CardTitle><h4>My KindWords</h4></CardTitle>
                {kindWordCards}
              </CardBody>
            </Card>

        }
      </div>
    );

}

const mapStateToProps = state => {
  return {
    kindWords: state.myKindWords
  }
}

export default connect(mapStateToProps)(MyKindWords)
