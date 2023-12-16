import React from 'react'
import UserContent from './UserContent'
import Wokingonit from './Wokingonit'
import './usercontent.css'
export default function Orders() {
  return (
    <React.Fragment>
      <div className='container'>   <div className='main'>
      <UserContent></UserContent><div className='right'><Wokingonit/></div></div></div>
       </React.Fragment>
  )
}
