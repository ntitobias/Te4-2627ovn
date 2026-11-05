import { useState } from 'react';

function Counter(){
    const[count, setCount] = useState(5);

    function handleIncrease(){
        setCount(count + 4);
    }

    function handleReset(){
        setCount(3);
    }

    return(
        <div>
            <h2>Klickräknare</h2>
            <p>Antal klick: {count}</p>
            <button onClick={handleIncrease}>Klicka mig!</button>
            <button onClick={handleReset}>Återställ</button>
        </div>
    );
}

export default Counter;