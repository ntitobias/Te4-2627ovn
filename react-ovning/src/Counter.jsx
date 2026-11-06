import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    function handleIncrease(){
        setCount(count +1);
    }
    function handleDecrease(){
        setCount(count -1);
    }
    return(
        <div style={{border: '1px dotted #22f', borderRadius: '8px', padding: '20px', margin: '15px'}}>
            
            <h3>Klickräknare</h3>
            <p>Antal klick: <span style={{color: count>=10?'red':'green'}}>{count}</span> </p>
            <button onClick={handleIncrease}>Öka</button>
            <button onClick={handleDecrease}>Minska</button>
        </div>
    );
}

export default Counter;