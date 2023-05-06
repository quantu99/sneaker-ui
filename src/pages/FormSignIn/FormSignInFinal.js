import { useState } from 'react';
import FormSignIn from './FormSignIn';
import FormSignInSuccess from './FormSignInSuccess';
function FormSignInFinal({ cartItems, wishItems }) {
    const [formIsLogin, setFormIsLogin] = useState(false);
    const loginForm = () => {
        setFormIsLogin(true);
    };
    return (
        <div>
            {!formIsLogin ? (
                <FormSignIn loginForm={loginForm} cartItems={cartItems} wishItems={wishItems} />
            ) : (
                <FormSignInSuccess cartItems={cartItems} wishItems={wishItems} />
            )}
        </div>
    );
}

export default FormSignInFinal;
