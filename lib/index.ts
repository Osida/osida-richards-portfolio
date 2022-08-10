import {client} from './sanity/client/client'
import {urlFor} from './sanity/image-url/img-url'
import {contactValidation} from './yup/Validation/contact-form'

const sanity = {client, urlFor}
const yup = {contactValidation}

export {sanity, yup}