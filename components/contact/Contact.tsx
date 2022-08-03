import React, {useState} from 'react';
import Image from "next/image";
import {AppWrap} from "../index";
import {useFormik} from "formik";
import {contactFormValidationSchema} from "../../lib/yub/contactFormValidationSchema";
import {images} from "../../constants";
import MotionWrap from "../wrapper/MotionWrap";

interface IFormValues {
    email: string,
    name: string,
    message: string,
}

interface IState {
    isLoading: boolean,
    isFormSubmitted: boolean
}


const Contact = () => {
    const [state, setState] = useState<IState>({isLoading: true, isFormSubmitted: false})
    const formInitialValues: IFormValues = {email: '', name: '', message: '',}

    const formik = useFormik({
        initialValues: formInitialValues,
        validationSchema: contactFormValidationSchema,
        onSubmit: values => {
            const payload = {method: 'POST', body: JSON.stringify(values)}
            fetch('api/contact', payload)
                .then(() => {
                    console.log('Contact: creating new contact')
                    setState({isLoading: false, isFormSubmitted: true})
                })
                .catch((error) => {
                    console.log('handleFormSubmit error')
                    console.log(error)
                })
        }
    })

    return (
        <footer
            className={'w-full h-full flex flex-col items-center justify-center space-y-16 lg:space-y-20 lg:min-h-[90vh]'}>
            <Title/>
            <EmailPhone/>

            {!state.isFormSubmitted ? (
                <form onSubmit={formik.handleSubmit}
                      className={'flex flex-col w-full items-center space-y-6 max-w-[830px]'}>

                    <div className={'flex flex-col space-y-1 w-5/6'}>
                        {formik.errors.name && <div className={'text-xs text-error'}>{formik.errors.name}</div>}
                        <div className={'flex flex-1 items-center px-6 py-4 rounded-lg bg-white'}>
                            <input
                                id='name' name='name' type="text"
                                placeholder={'Your Name'}
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                className={'flex-1 h-full text-sm text-black bg-transparent border-none outline-none'}
                            />
                        </div>
                    </div>

                    <div className={'flex flex-col space-y-1 w-5/6'}>
                        {formik.errors.email && <div className={'text-xs text-error'}>{formik.errors.email}</div>}
                        <div className={'flex flex-1 items-center px-6 py-4 rounded-lg bg-white'}>
                            <input
                                id='email' name='email' type="email"
                                placeholder={'Your Email'}
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                className={'flex-1 h-full text-sm text-black bg-transparent border-none outline-none'}
                            />
                        </div>
                    </div>

                    <div className={'flex flex-col space-y-1 w-5/6'}>
                        {formik.errors.message &&
                            <div className={'text-xs text-error'}>{formik.errors.message}</div>}
                        <textarea
                            id='message' name='message'
                            placeholder={'Your Message'}
                            onChange={formik.handleChange}
                            value={formik.values.message}
                            className={'rounded-lg p-6 text-sm text-black h-44 bg-white border-none outline-none'}
                        />
                    </div>

                    <button
                        type="submit"
                        className={'text-white bg-secondary px-8 py-4 text-sm text-black rounded-xl transition-all duration-200 ease-in-out hover:text-secondary hover:bg-white'}
                    >{state.isLoading ? 'Send Message' : 'Sending...'}</button>
                </form>
            ) : (
                <h3 className={'font-semibold text-black text-2xl'}>Thank you for getting in touch! 😊 🎉</h3>
            )}
        </footer>
    );
};

const Title = () => (
    <h1 className={'max-w-[850px] mx-auto text-4xl text-black text-center font-semibold leading-relaxed lg:text-5xl xl:text-6xl'}>
        Take A Coffee & <span className={'text-secondary'}>Chat With Me</span>
    </h1>
)

const EmailPhone = () => (
    <div
        className={'flex flex-col space-y-8 items-center w-full lg:flex-row lg:space-x-8 lg:items-center lg:space-y-0 lg:justify-center'}>
        <div
            className={'flex items-center space-x-3 bg-pink-100 rounded-xl py-4 px-8 min-w-[325px]'}
        >
            <div className={'relative w-10 h-10'}>
                <Image src={images.email} alt={'Email'} layout={'fill'} objectFit={'cover'}/>
            </div>
            <p className={'text-sm text-gray-500 font-medium'}>osidarichards@zohomail.com</p>
        </div>

        <div className={'flex items-center space-x-3 bg-white rounded-xl py-4 px-8 min-w-[325px]'}>
            <div className={'relative w-10 h-10'}>
                <Image src={images.mobile} alt={'Phone'} layout={'fill'} objectFit={'cover'}/>
            </div>
            <p className={'text-sm text-gray-500 font-medium'}>+1 (240) 292-0442</p>
        </div>
    </div>
)

export default AppWrap(
// @ts-ignore
    MotionWrap(Contact, 'flex-1 w-full flex-col'),
    'contact',
    'bg-primary'
);