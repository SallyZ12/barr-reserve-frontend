export const updateSignupForm = (formData) => {
    return {
      type: "UPDATE_SIGNUP_FORM",
      formData
    }
  }


export const resetSignupForm = () => {
  return {
    type: "RESET_SIGNUP_FORM"
  }
}


export const setFormDataForEdit = user => {
  const userFormData = {
    id: user.id,
    first_name: user.first_name,
    last_name: user.last_name,
    username: user.username,
    email: user.email,
    apartment: user.apartment,  
    password: "",
    admin: user.admin
}

  return {
    type: "SET_FORM_DATA_FOR_EDIT",
    userFormData
  }
}
