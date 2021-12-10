import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useAuth } from '../../hooks/useAuth';
import { Redirect } from 'react-router-dom';
import img from './image/google.png';

const Login: React.FC = () => {
    const [isLogged, setIsLogged] = useState(false);

    const handleLogin = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                if (user) {
                    setIsLogged(true);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
    if (isLogged) return <Redirect to='/' />;
    

    return (
        <div style={{ margin: '12rem auto 0', width: '50%', textAlign: 'center' }}>
            <img style={{ width: '30%', marginBottom: '2rem' }} src={img} alt='google' />
            <Button onClick={handleLogin} variant='primary' size='lg' style={{ width: '100%' }}>
                Войти с помощью Google
            </Button>{' '}
        </div>
    );
};

export default Login;
