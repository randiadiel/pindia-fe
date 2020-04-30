const inputs = {
  firstName: {
    name: "firstName",
    type: "text",
    placeholder: "John",
    label: "First Name",
  },
  lastName: {
    name: "lastName",
    type: "text",
    placeholder: "Schmith",
    label: "Last Name",
  },
  email: {
    name: "email",
    type: "email",
    placeholder: "example@company.com",
    label: "Email",
  },
  telephone: {
    name: "telephone",
    type: "text",
    placeholder: "08455655123",
    label: "Phone Number",
  },
  password: {
    name: "password",
    type: "password",
    placeholder: "Minimum 8 characters",
    label: "Password",
  },
  confirm: {
    name: "confirm",
    type: "password",
    placeholder: "Must be the same",
    label: "Confirm Password",
  },
  gender: {
    name: "gender",
    type: "select",
    placeholder: "Choose One",
    label: "Gender",
    options: [
      {
        id: 1,
        value: "Male",
        text: "Male",
      },
      {
        id: 2,
        value: "Female",
        text: "Female",
      },
    ],
  },
  birthday: {
    name: "birthday",
    type: "date",
    placeholder: "Input your birhtday",
    label: "Birth Date",
  },
  address: {
    name: "address",
    type: "textarea",
    placeholder: "Jl. Siliwangi Raya, Jakarta Barat, DKI JAKARTA, 11546",
    label: "Address",
  },
};

export default inputs;
