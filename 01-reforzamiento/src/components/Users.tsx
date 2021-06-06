import { useUser } from '../hooks/useUser';
import { User } from '../typescript/IReqRes';

import { Alert } from 'react-bootstrap';

export const Users = () => {
    const { users, previusPage, nextPage, loading, data } = useUser(1);
    

    const renderItemInTable = ( { id, avatar, first_name, last_name, email }: User ) => {
        return (
            <tr key={ id }>
                <td className="text-center">
                    <img src={ avatar } alt={ first_name } style={ { width: '80px', borderRadius: '50%' } }/>
                </td>
                <td>
                    { first_name } { last_name }
                </td>
                <td>
                    { email }
                </td>
            </tr>
        )
    }
    return (
        <>
            {
                ( loading )
                ?
                    (
                        <Alert variant="primary">
                            loading users......
                        </Alert>
                    )
                :   
                    ( data ) 
                    ?
                        <>
                            <table className="table table hover table-dark table-bordered">
                                <thead>
                                    <tr>
                                        <th>Avatar</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map( user => renderItemInTable(user) )
                                    }
                                </tbody>
                            </table>
                        </>
                    :
                        (
                            <Alert variant="danger">
                                Records not found!
                            </Alert>
                        )
            }
            
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 mx-auto text-center">
                            <button className="btn btn-primary" onClick={ () => previusPage() }>Previus</button>
                            <button className="btn btn-primary" id="next" onClick={ () => nextPage() }>Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}
