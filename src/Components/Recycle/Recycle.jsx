import React, { useContext, useEffect } from 'react'
import ImageBox from '../HomePage/HomePageComponents/ImageBox';
import TitlePrice from '../HomePage/HomePageComponents/TitlePrice';
import EmptyRecycle from './RecycleComponents/EmptyRecycle';
import RecycleTotal from './RecycleComponents/RecycleTotal';
import { MyContext } from '../../Context'
import { v4 as uuidv4 } from 'uuid';
import '../Recycle/Recycle.css'

export default function Recycle() {

    const { recycleArr, setRecycleArr, total, setTotal, reduceItems } = useContext(MyContext);
    let newTotal = total;

    const deleteItem = (item, index) => {
        const newRecycleArr = [...recycleArr];
        newRecycleArr.splice(index, 1);
        setRecycleArr(newRecycleArr)
        if (recycleArr.length > 0) {
            newTotal -= item.price;
        }
        setTotal(Math.round(newTotal));
    }

    useEffect(() => {
        reduceItems();
    }, [reduceItems])

    return (
        <div className='recycle'>
            <RecycleTotal />
            <div className='products'>
                {recycleArr.length > 0 ? recycleArr.map((item, index) => {
                    return (
                        <div className='product-recycle' key={uuidv4()}>
                            <ImageBox itemImage={item.image} />
                            <TitlePrice title={item.title} price={item.price} />
                            <p className='description'>{item.description.length > 150
                                ? item.description.substring(0, 150) + '...' : item.description}</p>
                            <div className='delete'>
                                <button className='btn' onClick={() => deleteItem(item, index)}>Delete</button>
                            </div>
                        </div>
                    )
                }) : <EmptyRecycle />}
            </div>
        </div>
    )
}