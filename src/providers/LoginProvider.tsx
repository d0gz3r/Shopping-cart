import { createContext, FC, useEffect, useState } from 'react';
import { IUser, TypeSetState } from '../types/types';
import { onAuthStateChanged, getAuth, Auth } from 'firebase/auth';

interface IContext {
    user: IUser | null;
    setUser: TypeSetState<IUser | null>;
    ga: Auth;
    isLoading: boolean;
}

export const LoginContext = createContext<IContext>({} as IContext);

export const LoginProvider: FC = ({ children }) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const ga = getAuth();

    useEffect(() => {
        const unListen = onAuthStateChanged(ga, (authUser) => {
            if (authUser) {
                setUser({
                    displayName: authUser.displayName || '',
                    email: authUser.email || '',
                    photoURL: authUser.photoURL || '',
                });
            } else {
                setUser(null);
            }
            setIsLoading(false);
        });
        return () => {
            unListen();
        };
    }, []);

    return <LoginContext.Provider value={{ user, setUser, ga, isLoading }}>{children}</LoginContext.Provider>;
};
