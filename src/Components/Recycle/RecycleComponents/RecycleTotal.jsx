import React, { useContext } from 'react'
import { MyContext } from '../../../Context'

export default function RecycleTotal() {

    const { total } = useContext(MyContext);

    return (
        <h1 className='not-found not-found3'>Total Price: {total}</h1>
    )
}
