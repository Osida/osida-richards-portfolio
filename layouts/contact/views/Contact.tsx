import React from 'react';
import {SectionLayout, Title} from "../../../components";
import ContactFormState from "../hooks/ContactFormState";
import {yup} from "../../../lib";
import {useFormik} from "formik";
import Copyright from "../../../components/copywright/Copyright";

interface IFormValues {
    email: string,
    name: string,
    message: string,
}

interface IFormInput {
    info: {
        id: string,
        name: string,
        type: string,
        placeholder: string,
    },
    error: string | undefined,
    value: string,
    handleChange: { (e: React.ChangeEvent<any>): void; <T_1 = string | React.ChangeEvent<any>>(field: T_1): T_1 extends React.ChangeEvent<any> ? void : ((e: (string | React.ChangeEvent<any>)) => void) }
}

const formInitialValues: IFormValues = {email: '', name: '', message: '',}

const {contactValidation} = yup

const Contact = () => {
    const {handleSetIsLoading, handleSetIsSubmitted, isSubmitted, isLoading} = ContactFormState()
    const api_destination = 'api/contact'

    const handleSubmit = async (values: IFormValues) => {
        try {
            const payload = {method: 'POST', body: JSON.stringify(values)}
            await fetch(api_destination, payload)
            console.log('Contact: creating new contact')
            handleSetIsLoading(false)
            handleSetIsSubmitted(true)
        } catch (error) {
            console.log('handleFormSubmit error')
            console.log(JSON.stringify(error))
        }
    }

    const formik = useFormik({
        initialValues: formInitialValues,
        validationSchema: contactValidation,
        onSubmit: values => {
            handleSubmit(values)
        }
    })

    return (
        <SectionLayout idName={'contact'} classNames={'bg-primary'}>
            <footer
                className={'flex-1 flex flex-col items-center space-y-16 px-2 lg:space-y-20'}
            >
                <ContactTitle/>

                {!isSubmitted ?
                    <form onSubmit={formik.handleSubmit}
                          className={'flex flex-col w-full items-center space-y-6 max-w-[830px]'}
                    >
                        <FormInput
                            info={{id: 'name', name: 'name', type: 'text', placeholder: 'Your Name'}}
                            error={formik.errors.name}
                            value={formik.values.name}
                            handleChange={formik.handleChange}
                        />
                        <FormInput
                            info={{id: 'email', name: 'email', type: 'email', placeholder: 'Your Email'}}
                            error={formik.errors.email}
                            value={formik.values.email}
                            handleChange={formik.handleChange}
                        />
                        <div className={'flex flex-col space-y-1 w-5/6'}>
                            {formik.errors.message &&
                                <div className={'text-xs text-error'}>{formik.errors.message}</div>}
                            <textarea
                                id='message' name='message' placeholder={'Your Message'}
                                onChange={formik.handleChange}
                                value={formik.values.message}
                                className={'rounded-lg p-6 text-sm text-black h-44 bg-white border-none outline-none'}
                            />
                        </div>
                        <button
                            type="submit"
                            className={'text-white bg-secondary px-8 py-4 text-sm text-black rounded-xl transition-all duration-200 ease-in-out hover:text-secondary hover:bg-white'}
                        >
                            {isLoading ? 'Send Message' : 'Sending...'}
                        </button>
                    </form>
                    :
                    <FormSubmittedText/>
                }

                <Copyright/>
            </footer>
        </SectionLayout>
    );
};

const ContactTitle = () => (
    <Title classNames={'pt-20'}>
        <Title.Black>Take A <Title.Blue text='Coffee'/> & <Title.Blue text='Chat'/> With Me</Title.Black>
    </Title>
)

const FormSubmittedText = () => (
    <h3 className={'font-semibold text-black text-2xl flex-1'}>Thank you for getting in touch! 😊 🎉</h3>
)

const FormInput = ({info, error, value, handleChange}: IFormInput) => (
    <div className={'flex flex-col space-y-1 w-5/6'}>
        {error && <div className={'text-xs text-error'}>{error}</div>}
        <div className={'flex flex-1 items-center px-6 py-4 rounded-lg bg-white'}>
            <input
                id={info.id} name={info.name} type={info.type} placeholder={info.placeholder}
                onChange={handleChange}
                value={value}
                className={'flex-1 h-full text-sm text-black bg-transparent border-none outline-none'}
            />
        </div>
    </div>
)
export default Contact;
