const validation = {
  Name: {
    required: true,
    minLength: 4,
    maxLength: 10,
  },
  Email: {
    required: true,
    minLength: 10,
    maxLength: 20,
    pattern: /\S+@\S+\.\S+/,
  },
  Password: {
    required: true,
    minLength: 4,
    maxLength: 20,
    pattern: /[A-Za-z1-9]/,
  },
};

export default validation;
