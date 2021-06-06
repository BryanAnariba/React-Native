import { useState, useRef, useEffect } from 'react';

import { apiConfig } from '../api/ReqResConfig';
import { IReqRes, User } from '../typescript/IReqRes';

export const useUser = (page: number = 1) => {

    const [ loading, setLoading ] = useState<boolean>(true);
    const pageRef = useRef<number>( page );
    const [ users, setUsers ] = useState<User[]>([]);
    const [ data, setData ] = useState(true);

    

    const previusPage = () => {
        if (pageRef.current > 1) {
            pageRef.current --;
            loadUsers();
        }
    }

    const nextPage = () => {
        if (users.length > 0) {
            pageRef.current ++;
            loadUsers();
        }
    }

    const loadUsers = () => {
        setLoading(true);
        apiConfig.get<IReqRes>('/users', { params: {
            page: pageRef.current
        } })
        .then((response) => {
            
            setLoading(false);
            if (response.data.data.length > 0) {
                setUsers(response.data.data);
                console.log(users); 
                setData(true);
            } else {
                setData(false);
                setUsers([]);
                console.log(users); 
            }
            
        })
        .catch((error) => {
            console.error(error);
        });
    }
    useEffect(() => {
        const loadUsers = () => {
        setLoading(true);
        apiConfig.get<IReqRes>('/users', { params: {
            page: pageRef.current
        } })
        .then((response) => {
            
            setLoading(false);
            if (response.data.data.length > 0) {
                setUsers(response.data.data);
                console.log(users); 
                setData(true);
            } else {
                setData(false);
                setUsers([]);
                console.log(users); 
            }
            
        })
        .catch((error) => {
            console.error(error);
        });
    }
        loadUsers();
    }, []);

    return {
        users: users,
        previusPage: previusPage,
        nextPage: nextPage,
        loading: loading,
        data: data
    };
}
