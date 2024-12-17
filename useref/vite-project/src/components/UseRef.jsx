import React, { useRef } from 'react';

const UseRefComponent = () => {
    const ref = useRef(0);
    const a = 56;

    function increment() {
        console.log(ref.current);
        ref.current++;
    }

    return (
        <div>
            <h2>Current count is: {ref.current}</h2>
            <h2>a is: {a}</h2>
            <button onClick={increment}>Click Me!!</button>
        </div>
    );
}

export default UseRefComponent;
