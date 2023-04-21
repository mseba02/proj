export interface IRegisterForm {
  email: string
  password: string
  firstName: string
  lastName: string
  file?: any
  image?: any
  successMessage: string
}

export interface ILoginForm {
  email: string
  password: string
}
