import React from 'react'
import { connect } from 'react-redux'
import UserCard from './UserCard'
import MyMilestones from './MyMilestones'

const Welcome = ({ currentUser }) => {
  return (
    <div className="Welcome">
      { currentUser ?
        <strong>Welcome,
          {currentUser.attributes.first_name} {currentUser.attributes.last_name}
        </strong> :
      "" }
      <UserCard user= {currentUser} />
      <MyMilestones />
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(Welcome)
