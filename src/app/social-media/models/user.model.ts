export interface User {
  personalInfo: PersonalInfo
  contactPreference: string
  email: Email
  phone: string
  loginInfo: LoginInfo
  id: number
}

export interface PersonalInfo {
  firstName: string
  lastName: string
}

export interface Email {
  email: string
  confirm: string
}

export interface LoginInfo {
  username: string
  password: string
  confirmPassword: string
}
