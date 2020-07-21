import React from 'react'
import KindWordForm from './KindWordForm'
import { updateKindWord, deleteKindWord  } from '../actions/myKindWords'
// add to /actions next 2 functions
import { setKindWordFormDataForEdit, resetKindWordForm } from '../actions/kindWordForm'
import { connect } from 'react-redux'
import UserCard from './UserCard'
import './UserCard.css'

class EditKindWordFormWrapper extends React.Component {

  componentDidMount(){
    this.props.kindWord && this.props.setKindWordFormDataForEdit(this.props.kindWord)
  }

  componentDidUpdate(prevProps) {
    this.props.kindWord && !prevProps.kindWord && this.props.setKindWordFormDataForEdit(this.props.kindWord)
  }

  componentWillUnmount() {
    this.props.resetKindWordForm()
  }

  handleSubmit = (formData) => {
    const { updateKindWord, kindWord, history } = this.props
    updateKindWord({
      ...formData,
      kindWordId: kindWord.id
    }, history)
  }

  render() {
    const { history, deleteKindWord, kindWord, whoId, users} = this.props
    console.log("whoId", whoId, "kindWord", kindWord)
    const kindWordId = kindWord ? kindWord.id : null
    return (<>
            <KindWordForm editMode  handleSubmit={this.handleSubmit} />
            <button style={{color:"red"}} onClick={()=>deleteKindWord(kindWordId, history)} >Delete this kindWord</button>
            {whoId === "" ? "" : <UserCard user = {users.find(user => user.id === whoId)} />}
            <br/>

          </>
        )
  }
}
const mapStateToProps = state => {

  return {
    users: state.users.users,
    whoId: state.kindWordForm.who
  }
}

export default connect(mapStateToProps, {updateKindWord, setKindWordFormDataForEdit, resetKindWordForm, deleteKindWord})(EditKindWordFormWrapper);
