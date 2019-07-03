// sync actions

export const updateNewMilestoneForm = (name, value) => {
  const formData = { name, value }
  return{
    type: "UPDATE_NEW_MILESTONE_FORM",
    formData
  }
}
