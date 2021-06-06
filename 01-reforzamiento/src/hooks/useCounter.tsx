import { useState } from "react"

export const useCounter = (initialValue: number = 0) => {
    const [ counter, setCounter ] = useState<number>(initialValue);

    const add = (): void => {
        setCounter(counter + 1);
    }

    const substract = (num: number = 1): void => {
        setCounter(counter - num);
    }

    return {
        add,
        substract,
        counter
    }
}
