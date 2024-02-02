import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState(0);

    // Your solution starts here
    const expensivevalue = useMemo(()=>{
        let value = 1;
        for(let i = 1; i <= input; i++){
            // eslint-disable-next-line no-const-assign
            value = value*i;
            
        } 
        return value;
    },[input])

    // Your solution ends here

    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Factorial Calculated Value: {expensivevalue}</p>
        </div>
    );
}