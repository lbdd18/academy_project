/**
 * Immutability
 * users = ['Luciano', 'Marcelo']
 * users.push('anju') //Altera directamente o array (espaco de memoria)
 * newUsers = [...users, 'Anju']
 **/

import MuiButton from "../../components/MuiButton"
import { Content, Title, NumberLabel } from "./styles"

interface CounterProps {
    number: number;
    increment: () => void;
}


const Counter = ({ number, increment }: CounterProps) => {
    return (
        <>
            <Title variant="h5">Counter</Title>
            <Content>
                <NumberLabel>{number}</NumberLabel>
                <MuiButton variant="contained" color="secondary" onClick={increment}>Increment + 1</MuiButton>
            </Content>
        </>
    )
}

export default Counter