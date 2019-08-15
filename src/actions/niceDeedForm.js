export const updateNiceDeedForm = (name, value) => {
  return {
    type: "UPDATE_NEW_NICEDEED_FORM",
    formData: { name, value }
  }
}

export const resetNiceDeedForm = () => {
  return {
    type: "RESET_NEW_NICEDEED_FORM",
  }
}

export const setNiceDeedFormDataForEdit = niceDeed => {
  const niceDeedFormData = {
    heading: niceDeed.attributes.heading,
    when: niceDeed.attributes.when,
    what: niceDeed.attributes.what,
    who: niceDeed.attributes.who
  }
  return {
    type: "SET_NICEDEED_FORM_DATA_FOR_EDIT",
    niceDeedFormData
  }
}
