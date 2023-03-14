import React, { useContext, useState } from 'react'
import { MyContext } from '../../Context'
import '../HomePage/HomePage.css'
import Counter from './HomePageComponents/Counter';
import ImageBox from './HomePageComponents/ImageBox';
import SearchPanel from './HomePageComponents/SearchPanel';
import TitlePrice from './HomePageComponents/TitlePrice';
import { v4 as uuidv4 } from 'uuid';

export default function HomePage() {

    const [bool, setBool] = useState(true);
    const { data, recycleArr, setRecycleArr, login } = useContext(MyContext);

    const addToRecycle = (item) => {
        if (localStorage.getItem(login)) {
            setRecycleArr([
                ...recycleArr,
                item
            ]);
            setBool(true);
        } else {
            setBool(false);
        }
    }

    return (
        <div className='home-page'>
            {bool ? "" : <h1 className='h1'>Please sing-up or sing-in</h1>}
            <SearchPanel />
            <div className='products'>
                {data !== undefined ? data.map(item => {
                    return (
                        <div className='product' key={uuidv4()}>
                            <ImageBox itemImage={item.image} />
                            <TitlePrice title={item.title} price={item.price} />
                            <p className='description'>{item.description.length > 150 ? item.description.substring(0, 150) + '...' : item.description}</p>
                            <Counter />
                            <div className='add'>
                                <button className='btn' onClick={() => addToRecycle(item)}>Add to Cart</button>
                            </div>
                        </div>
                    )
                }) : null}
            </div>
        </div>
    )
}
