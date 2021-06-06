import { useState } from 'react';
export const useForm = <T extends Object>( formState: T ) => {
    const [ form, setForm ] = useState( formState );

    const handleInputChange = ( value: string, field: keyof T ) => {
        setForm({ 
            ...form,  
            [field]: value
        });
    }

    return {
        handleInputChange,
        form
    };
}
