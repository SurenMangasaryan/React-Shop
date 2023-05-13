import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../../../Context'

export default function Recycle() {

  const { recycleArr } = useContext(MyContext);

  return (
    <div className='recycle-box'>
      <div>Recycle</div>
      <div className='circle'>{recycleArr.length}</div>
    </div>
  )
}
