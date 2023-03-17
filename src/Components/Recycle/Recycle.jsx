import React, { useContext } from 'react'
import { MyContext } from '../../Context'
import Counter from '../HomePage/HomePageComponents/Counter';
import ImageBox from '../HomePage/HomePageComponents/ImageBox';
import TitlePrice from '../HomePage/HomePageComponents/TitlePrice';
import '../Recycle/Recycle.css'
import EmptyRecycle from './RecycleComponents/EmptyRecycle';
import { v4 as uuidv4 } from 'uuid';
import RecycleTotal from './RecycleComponents/RecycleTotal';

export default function Recycle() {

    const { recycleArr, setRecycleArr, total, setTotal } = useContext(MyContext);
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


    return (
        <div className='recycle'>
            <RecycleTotal />
            <div className='products'>
                {recycleArr.length > 0 ? recycleArr.map((item, index) => {
                    return (
                        <div className='product' key={uuidv4()}>
                            <ImageBox itemImage={item.image} />
                            <TitlePrice title={item.title} price={item.price} />
                            <p className='description'>{item.description.length > 150
                                ? item.description.substring(0, 150) + '...' : item.description}</p>
                            <Counter />
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