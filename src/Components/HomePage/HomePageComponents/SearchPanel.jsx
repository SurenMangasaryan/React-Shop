import React, { useCallback, useContext, useState } from 'react'
import { MyContext } from '../../../Context';

export default function SearchPanel() {

    const { data, setData, prevData } = useContext(MyContext);
    const [search, setSearch] = useState('');
    const [value, setValue] = useState(0);

    const memoizedSearch = useCallback(() => {
        if (search.length > 1) {
            const newData = data.filter(item => {
                return item.title.toLowerCase().includes(search.toLowerCase())
            })
            setData(newData);
            setSearch('');
        }
    }, [search])

    const memoizedValue = useCallback(() => {
        if (value > 0) {
            const newData = data.filter(item => {
                return item.price > value
            })
            setData(newData);
            setValue(0);
        }
    }, [value])

    return (
        <div className='search-panel'>
            <form className='form' onSubmit={(e) => {
                e.preventDefault();
                memoizedSearch();
                memoizedValue();
            }}>
                <div className='form'>
                    <input className='text-field__input' type="text" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                </div>
                <div className='form'>
                    <label className='value' htmlFor="range-value">{value}</label>
                    <input id="range-value" type="range" value={value} min={0} max={700} step={50} onChange={(e) => { setValue(e.target.value) }} />
                </div>
                <button className='btn'>Search</button>
            </form>
            <button className='btn' onClick={() => setData(prevData)}>All</button>
        </div>
    )
}

