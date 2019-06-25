// action creator, it is a function that receives formData
// and returns an object action
export const updateLoginForm = (formData) => {
  return {
    type: "UPDATE_LOGIN_FORM",
    formData
  }
}

export const resetLoginForm = () => {
  return {
    type: "RESET_LOGIN_FORM"
  }
}
