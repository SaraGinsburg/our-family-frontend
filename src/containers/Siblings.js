import React, { Component } from 'react';
import { connect } from 'react-redux';

import SiblingCard from '../components/SiblingCard'
import SiblingForm from './SiblingForm'
// import { getSiblings } from '../actions/siblings'
import './Siblings.css'


class Siblings extends Component {

  componentDidMount() {
    this.props.getSiblings()
  }

  render() {
    return (
      <div className="SiblingsContainer">
        <h1>Siblings</h1>
        {this.props.siblings.map(sibling => <SiblingCard key={sibling.id} sibling={sibling} />)}
        <SiblingForm />
      </div>
    );
  }
}

  const mapStateToProps = (state) => {
    return({
      siblings: state.siblings
    })
  }

// export default connect(mapStateToProps, { getSiblings })(Siblings)
export default connect(mapStateToProps)(Siblings)
