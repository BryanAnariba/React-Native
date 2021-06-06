import React from 'react';

// Interfaces -> gives to specific types to Iteral Objects
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
}

interface Address {
    country: string;
    houseNo: number;
}

export const IteralObjects = () => {
    const person: Person = {
        firstName: 'Bryan Ariel',
        lastName: 'Sanchez Anariba',
        age: 24,
        address: {
            country: 'Honduras',
            houseNo: 4501
        }
    };

    // console.log(person.firstName);

    return (
        <>
            <h3>Iterals Objects</h3>
            <p>
                <code>
                    <pre>
                        {
                            JSON.stringify( person, null, 2 )
                        }
                    </pre>
                </code>
            </p>
        </>
    )
}
