import { useCounter } from '../hooks/useCounter';
export const CounterWithHook = () => {
    const { counter, add, substract } = useCounter();
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
