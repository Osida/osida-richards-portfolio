import * as yup from 'yup'

export const contactValidation  = yup.object({
    email: yup.string().email().required('Please enter a valid email. "example@mail.com"'),
    name: yup.string().required('Required'),
    message: yup.string().required('Required'),
})