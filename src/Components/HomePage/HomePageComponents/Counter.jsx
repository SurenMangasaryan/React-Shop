import React, { useContext, useState } from 'react'
import { MyContext } from '../../../Context';

export default function Counter({ item, setBool }) {

    const [count, setCount] = useState(1);
    const { recycleArr, setRecycleArr, login } = useContext(MyContext);

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

    const addToRecycle = (item) => {
        if (localStorage.getItem(login)) {
            if (count >= 1) {
                for (let i = 0; i < count; i++) {
                    setRecycleArr([
                        ...recycleArr,
                        item
                    ]);
                }
            }
            setBool(true);
        } else {
            setBool(false);
        }
    }

    return (
        <>
            <div className='counter'>
                <p className='t-p'>Qty:</p>
                <div className='plus-and-minus'>
                    <button className='button' onClick={() => minusCount()}>-</button>
                    <p className='t-p'>{count}</p>
                    <button className='button' onClick={() => plusCount()}>+</button>
                </div>
            </div>
            <div className='add'>
                <button className='btn' onClick={() => addToRecycle(item)}>Add to Cart</button>
            </div>
        </>

    )
}
