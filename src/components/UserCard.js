  import React from 'react'

  const UserCard = ({user}) => {
    console.log(user)
    return (
      !user ? "" :
      <div key={user.id} className="UserCard">
        <h3>{user.attributes.first_name} {user.attributes.last_name}</h3>
        <p> Birthdate: {user.attributes.birthdate}</p>
        <p> Points Earned: {user.attributes.points_earned}</p>
        <img className="UserImage" src={user.attributes.picture} alt=""  />
      </div>
    )
  }

  export default UserCard;
