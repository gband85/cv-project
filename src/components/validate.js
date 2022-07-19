const validate = (name, email, phone) => {
  const validPhone = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;
  const errors = [];
  if (name.length === 0) {
    errors.push("Enter a name");
  }
  if (email.length <= 5) {
    errors.push("Enter an email with at least five characters");
  }
  if (email.indexOf("@") === -1) {
    errors.push("Email must contain an @");
  }
  if (email.indexOf(".") === -1) {
    errors.push("Email must contain at least one dot(.)");
  }
  if (validPhone.test(phone) === false) {
    errors.push("Phone number must be entered in the pattern ###-###-####");
  }
  return errors;
};
export default validate;
