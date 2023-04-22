import React, { useContext, useState } from 'react'
import Counter from './HomePageComponents/Counter';
import ImageBox from './HomePageComponents/ImageBox';
import SearchPanel from './HomePageComponents/SearchPanel';
import TitlePrice from './HomePageComponents/TitlePrice';
import { MyContext } from '../../Context'
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import '../HomePage/HomePage.css'

export default function HomePage() {

    const [bool, setBool] = useState(true);
    const { data } = useContext(MyContext);

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
                            <Counter item={item} setBool={setBool} />
                            <Link to={`${item.id}`}><button className='btn'>About</button></Link>
                        </div>
                    )
                }) : null}
            </div>
        </div>
    )
}
