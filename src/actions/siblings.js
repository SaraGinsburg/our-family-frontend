import { resetSiblingForm } from './siblingForm';


// ** async actions
export const getSiblings = () => {
  return dispatch => {
    return fetch('http://localhost:3000/api/v1/siblings')
    .then(response => response.json())
    .then(siblings => dispatch(setSiblings(siblings)))
    .catch(error => console.log(error))
  }
}
