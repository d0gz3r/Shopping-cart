import React, { useState } from 'react';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../../hooks/useAuth';
import { signOut } from '@firebase/auth';
import { Redirect } from 'react-router-dom';

const Cabinet: React.FC = () => {
    const { user, ga } = useAuth();

    const [isLogged, setIsLogged] = useState(true);

    const handleLogOut = () => {
        setIsLogged(false);
        signOut(ga);
    };

    if (!isLogged) return <Redirect to='/' />;

    return (
        <div style={{ margin: '2rem auto 0', width: '70%', textAlign: 'center' }}>
            <h1 style={{ color: '#fff', marginBottom: '5rem' }}>Мой профиль</h1>
            <div style={{ marginBottom: '5rem' }}>
                <Figure>
                    <Figure.Image width={171} height={180} alt='171x180' src={user?.photoURL} />
                </Figure>
                <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Имя: {user?.displayName}</h2>
                <h3 style={{ color: '#fff', marginBottom: '2rem' }}>Почта: {user?.email}</h3>
            </div>
            <Button onClick={handleLogOut} variant='primary' size='lg' style={{ width: '40%' }}>
                Выйти
            </Button>{' '}
        </div>
    );
};

export default Cabinet;
