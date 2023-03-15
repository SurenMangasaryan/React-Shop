import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function About() {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => setProduct(res));

    }, [id])

    return (
        <div >
            <h3 className='not-found not-found1'>{product.data !== undefined ? product.data.title : null}</h3>
            <h3 className='not-found not-found2'>{product.data !== undefined ? product.data.description : null}</h3>
        </div>
    )
}
