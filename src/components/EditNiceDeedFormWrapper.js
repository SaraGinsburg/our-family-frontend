import React from 'react'
import NiceDeedForm from './NiceDeedForm'
import { updateNiceDeed, deleteNiceDeed  } from '../actions/myNiceDeeds'
import { setNiceDeedFormDataForEdit, resetNiceDeedForm } from '../actions/niceDeedForm'
import { connect } from 'react-redux'
import  './UserCard.css'
class EditNiceDeedFormWrapper extends React.Component {

  componentDidMount(){
    this.props.niceDeed && this.props.setNiceDeedFormDataForEdit(this.props.niceDeed)
  }

  componentDidUpdate(prevProps) {
    this.props.niceDeed && !prevProps.niceDeed && this.props.setNiceDeedFormDataForEdit(this.props.niceDeed)
  }

  componentWillUnmount() {
    this.props.resetNiceDeedForm()
  }

  handleSubmit = (formData) => {

    const { updateNiceDeed, niceDeed, history } = this.props
    updateNiceDeed({
      ...formData,
      niceDeedId: niceDeed.id
    }, history)
  }

  render() {
    const { history, deleteNiceDeed, niceDeed} = this.props
    const niceDeedId = niceDeed ? niceDeed.id : null
    return(
      <>
        <NiceDeedForm editMode  handleSubmit={this.handleSubmit} />
        <button style={{color:"red"}} onClick={()=>deleteNiceDeed(niceDeedId, history)} >Delete this niceDeed</button>
      </>
    );
  }
}

export default connect(null, {updateNiceDeed, setNiceDeedFormDataForEdit, resetNiceDeedForm, deleteNiceDeed})(EditNiceDeedFormWrapper);
