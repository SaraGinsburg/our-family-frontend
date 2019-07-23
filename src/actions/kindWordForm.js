// sync actions
export const updateKindWordForm = (name, value) => {
  return {
    type: "UPDATE_NEW_KINDWORD_FORM",
    formData: { name, value }
  }
}

export const resetKindWordForm = () => {
  return {
    type: "RESET_NEW_KINDWORD_FORM",
  }
}

export const setKindWordFormDataForEdit = kindWord => {
  const kindWordFormData = {
    heading: kindWord.attributes.heading,
    when: kindWord.attributes.when,
    what: kindWord.attributes.what,
    who: kindWord.attributes.who
  }
  return {
    type: "SET_KINDWORD_FORM_DATA_FOR_EDIT",
    kindWordFormData
  }
}
