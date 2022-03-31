/**
 * Immutability
 * users = ['Luciano', 'Marcelo']
 * users.push('anju') //Altera directamente o array (espaco de memoria)
 * newUsers = [...users, 'Anju']
 **/

interface CounterProps {
    number: number;
    increment: () => void;
}


const Counter = ({number, increment}: CounterProps) => {
    return(
        <div>
            <span>{number}</span>
            <button type="button" onClick={increment}>Increment + 1</button>
        </div>
    )
}

export default Counter