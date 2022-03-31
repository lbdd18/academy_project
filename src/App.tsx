import './styles/global.scss'

import NewsList from './components/NewsList'
import VersionsList from './components/VersionsList'
import Counter from './components/Counter'
import { useState } from 'react';

import './services/server'

export default function App(){
    const [number, setNumber] = useState(0);

    function increment(){
        setNumber(number + 1);
    }

    return(
        <div>
            <NewsList />
            <VersionsList />
            <Counter number={number} increment={increment} />
        </div>
    )
}