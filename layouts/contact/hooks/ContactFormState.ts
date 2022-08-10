import {useState} from 'react';

const ContactFormState = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSetIsLoading = (state: boolean) => setIsLoading(state)

    const handleSetIsSubmitted = (state: boolean) => setIsSubmitted(state)

    return {isLoading, isSubmitted, handleSetIsLoading, handleSetIsSubmitted}
};

export default ContactFormState;
