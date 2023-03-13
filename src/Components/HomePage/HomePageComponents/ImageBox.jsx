import React from 'react'

export default function ImageBox({ itemImage }) {
    return (
        <div className='img-box'>
            <img src={itemImage} />
        </div>
    )
}
