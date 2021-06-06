import { useState } from "react"

export const Counter = () => {
    const [ counter, setCounter ] = useState<number>(0);

    const add = (): void => {
        setCounter(counter + 1);
    }

    const substract = (num: number = 1): void => {
        setCounter(counter - num);
    }

    return (
        <>
            <h3>Counter in = { counter }</h3>
            <div className="mt-2">
                <button className="btn btn-success" onClick={ () => add() }>Add + 1</button>
            </div>
            <div className="mt-2">
                <button className="btn btn-danger" onClick={ () => substract() }>Substract - 1</button>
            </div>
        </>
    )
}
