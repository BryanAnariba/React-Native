export const Functions = () => {
    
    const add = (num1: number, num2: number): number => {
        return num1 + num2;
    }

    const substract = (num1: number, num2: number): number => {
        return num1 - num2;
    }

    return (
        <>
            <h3>Functions in Typescript</h3>
            <p>
                add 55 + 66= { add(55,66) }
            </p>
            <p>
                add 55 - 66= { substract(55,66) }
            </p>
        </>
    )
}
