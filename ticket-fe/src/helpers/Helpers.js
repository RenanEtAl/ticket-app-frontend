export const validateInputs = (userData, setError) => {
  const { username, password, role } = userData;
  let errorMsg = {
    usernameError: "",
    passwordError: "",
    roleError: "",
  };

  let formValid = true;

  if (!username) {
    formValid = false;
    errorMsg.usernameError = "Please enter a username";
  }
  if (typeof username !== undefined) {
    if (username.length <= 3 || username.length > 12) {
      formValid = false;
      errorMsg.usernameError = "Username must be between 4 and 12 characters";
    }
  }
  if (!password) {
    formValid = false;
    errorMsg.passwordError = "Please enter password";
  }
  if (typeof password !== undefined) {
    // /^.*(?=.{6,})(?=.*\d)(?=.*[a-z])(?=.*[a-a])(?=.*[@#$%&]).*$/
    if (!password.match(/^.*(?=.{6,})(?=.*\d)(?=.*[a-z])(?=.*[a-z]).*$/)) {
      formValid = false;
      errorMsg.passwordError = "Password requires at least 6 characters";
    }
  }
  if (role === "") {
    formValid = false;
    errorMsg.roleError = "Please select a role";
  }
  setError(errorMsg);
  return formValid;
};

// department dropdown options
export const departmentsArray = () => {
  const result = [
    {
      id: 0,
      title: "IT",
      key: "departments",
    },
    {
      id: 1,
      title: "Finance",
      key: "departments",
    },
    {
      id: 2,
      title: "Human Resources",
      key: "departments",
    },
    {
      id: 3,
      title: "Sales/Marketing",
      key: "departments",
    },
  ];

  return result;
};
// priority dropdown options
export const prioritiesArray = () => {
  const result = [
    {
      id: 0,
      title: "Low",
      key: "priorities",
    },
    {
      id: 1,
      title: "Medium",
      key: "priorities",
    },
    {
      id: 2,
      title: "High",
      key: "priorities",
    },
  ];

  return result;
};
