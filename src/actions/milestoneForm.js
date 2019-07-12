
// sync actions
export const updateMilestoneForm = (name, value) => {
  
  return{
    type: "UPDATE_NEW_MILESTONE_FORM",
    formData: { name, value }
  }
}

export const resetMilestoneForm = () => {
  return {
    type: "RESET_NEW_MILESTONE_FORM",
  }
}


export const setFormDataForEdit = milestone => {
  const milestoneFormData = {
    heading: milestone.attributes.heading,
    when: milestone.attributes.when,
    what: milestone.attributes.what,
    picture: milestone.attributes.picture
  }
  return {
    type: "SET_FORM_DATA_FOR_EDIT",
    milestoneFormData
  }
}
