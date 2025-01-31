export class ComplexFormValue {
  personalInfo!: {
    firstName: string,
    lastName: string
  };
  contactPreference!: string;
  email?: {
    email: string,
    confirm: string
  };
  phone?: string;
  loginInfo!: {
    username: string,
    password: string,
<<<<<<< HEAD
    confirmPassword: string
=======
    confirmPassword: string,
>>>>>>> a23e02460a48fd6fb65da395ae358b75dff79c02
  };
}
