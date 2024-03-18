import * as yup from "yup"


export const validationSchema = yup.object({
    email:yup.string().email().required('Invalid email'),
    message:yup.string().required('Input cannot be empty'),
})