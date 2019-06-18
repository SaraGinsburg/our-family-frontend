import { resetUserForm } from './userForm';


// ** async actions
export const getUsers = () => {
  return dispatch => {
    return fetch('http://localhost:3000/api/v1/users')
    .then(response => response.json())
    .then(users => dispatch(setUses(users)))
    .catch(error => console.log(error))
  }
}
