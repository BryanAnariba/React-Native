import { Alert } from 'react-bootstrap';
import { useForm } from '../hooks/useForm';

export const Form = () => {
    const { form, handleInputChange } = useForm({
        email: '',
        password: ''
    });
    return (
        <>
            <h3>Form</h3> 
            <div className="card">
                <div className="card-header bg-info text-white text-center">
                    <h3>User Form</h3>    
                </div>  
                <div className="card-body">
                    <div className="form-group">
                        <input 
                            type="email" 
                            name="email" 
                            id="email"  
                            className="form-control"
                            placeholder="Write email"
                            onChange = { ({ target }) => handleInputChange ( target.value , 'email' ) }
                            value = { form.email }
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="password" 
                            name="password" 
                            id="password"  
                            className="form-control"
                            placeholder="Write password"
                            value = { form.password }
                            onChange = { ({ target }) => handleInputChange ( target.value , 'password' ) }
                        />
                    </div>
                </div>
            </div> 

            <Alert variant="danger">
                <code>
                    <pre>
                        {
                            JSON.stringify( form, null, 2 )
                        }
                    </pre>
                </code>
            </Alert>
        </>
    )
}
