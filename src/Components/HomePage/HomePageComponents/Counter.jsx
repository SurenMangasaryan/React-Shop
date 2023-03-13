import React, { useState } from 'react'

export default function Counter() {

    const [count, setCount] = useState(0);

    const plusCount = () => {
        setCount(count + 1);
    }

    const minusCount = () => {
        if (count > 0) {
            setCount(count - 1);
        } else {
            setCount(0);
        }
    }

    return (
        <div className='counter'>
            <p className='t-p'>Qty:</p>
            <div className='plus-and-minus'>
                <button className='button' onClick={() => minusCount()}>-</button>
                <p className='t-p'>{count}</p>
                <button className='button' onClick={() => plusCount()}>+</button>
            </div>
        </div>
    )
}
