import { useState } from 'react';
import FormSignUp from './FormSignUp';
import FormSignUpSuccess from './FormSignUpSuccess';
function Form({ cartItems, wishItems }) {
    const [formIsSubmitted, setFormIsSumitted] = useState(false);
    const submitForm = () => {
        setFormIsSumitted(true);
    };
    return (
        <div>
            {!formIsSubmitted ? (
                <FormSignUp submitForm={submitForm} cartItems={cartItems} wishItems={wishItems} />
            ) : (
                <FormSignUpSuccess cartItems={cartItems} wishItems={wishItems} />
            )}
        </div>
    );
}

export default Form;
