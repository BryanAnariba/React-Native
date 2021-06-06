import { useEffect, useReducer } from 'react';

import { authReducer } from '../reducers/authReducer';

export const Login = () => {
    const signIn = () => {
        dispatch({ type: '@login', payload: { name: 'Bryan Ariel Sanchez Anariba', username: 'saariel115@gmai.com' } });
    }

    const logOut = () => {
        dispatch({ type: '@logout' });
    }

    const initialState = {
        validing: true,
        token: null,
        username: '',
        name: ''
    };


    const [ { validing, token, name, username }, dispatch ] = useReducer(authReducer, initialState);

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: '@logout' });
        }, 3000);
    }, []);

    if (validing){
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info">
                    validando...
                </div>
            </>
        );
    }

    return (
        <>
            {
                ( token !== null ) 
                ?
                    <>
                        <h3>You are Logged Successfully</h3>
                        <div className="alert alert-success">
                            Name: { name }
                            Username: { username }
                        </div>

                        <div className="mt-2">
                            <button className="btn btn-danger" onClick={ () => logOut() }>
                                LogOut
                            </button>
                        </div>
                    </>
                :
                    <>
                        <h3>
                            Login
                        </h3>
                        <div className="alert alert-danger">
                            Acceso no autorizado
                        </div>

                        <div className="mt-2">
                            <button className="btn btn-primary" onClick={ () => signIn() }>
                                Login
                            </button>
                        </div>
                    </>
            }
        </>
    )
}
