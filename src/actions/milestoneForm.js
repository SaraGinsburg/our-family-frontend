
// sync actions

export const updateMilestoneForm = (when, what, picture, heading) => {
  const formData = { when, what, picture, heading }
  return{
    type: "UPDATE_NEW_MILESTONE_FORM",
    formData
  }
}

export const resetMilestoneForm = () => {
  return {
    type: "RESET_NEW_MILESTONE_FORM",
  }
}


export const setFormDataForEdit = milestone => {
  const milestoneFormData = {
    when: milestone.attributes.when,
    what: milestone.attributes.what,
    picture: milestone.attributes.picture,
    heading: milestone.attributes.heading
  }
  return {
    type: "SET_FORM_DATA_FOR_EDIT",
    milestoneFormData
  }
}
