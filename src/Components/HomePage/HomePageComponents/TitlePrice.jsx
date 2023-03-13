import React from 'react'

export default function TitlePrice({ title, price }) {
    return (
        <div className='title-price'>
            <h4 className='t-p'>{title.length > 20 ? title.substring(0, 20) + '...' : title}</h4>
            <p className='t-p'>{price}</p>
        </div>
    )
}
