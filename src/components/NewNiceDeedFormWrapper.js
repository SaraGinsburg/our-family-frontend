import React from 'react'
import NiceDeedForm from './NiceDeedForm'
import { createNiceDeed } from '../actions/myNiceDeeds'
import { connect } from 'react-redux'

const NewNiceDeedFormWrapper = ({ history, createNiceDeed }) => {

  const handleSubmit = (formData, userId) => {

    console.log("in NewNiceDeedFormWrapper userId", userId)
    createNiceDeed({
      ...formData,
      userId
    }, history)
  }

  return <NiceDeedForm history={history} handleSubmit={handleSubmit} />
}

export default connect(null, { createNiceDeed })(NewNiceDeedFormWrapper);
