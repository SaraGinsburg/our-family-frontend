import React from 'react'
import KindWordForm from './KindWordForm'
import { updateKindWord, deleteKindWord  } from '../actions/myKindWords'
// add to /actions next 2 functions
import { setKindWordFormDataForEdit, resetKindWordForm } from '../actions/kindWordForm'
import { connect } from 'react-redux'
import  './UserCard.css'
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
    const { history, deleteKindWord, kindWord} = this.props
    const kindWordId = kindWord ? kindWord.id : null
    return <>
            <KindWordForm editMode  handleSubmit={this.handleSubmit} />
            <br/>
            <button style={{
                          color:"red",
                          float: "center",
                          position: "absolute",
                          bottom: 328,
                            left: 560,
                          display: "flex"
                         }}
                    onClick={()=>deleteKindWord(kindWordId, history)} >Delete this kindWord</button>
          </>

  }
}

export default connect(null, {updateKindWord, setKindWordFormDataForEdit, resetKindWordForm, deleteKindWord})(EditKindWordFormWrapper);
