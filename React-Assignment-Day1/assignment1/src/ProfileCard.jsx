import React from 'react'

function ProfileCard({item}) {
  return (
    <div style={{width:"20vw" ,backgroundColor:"whitesmoke" ,textAlign:"center"}} className='mb-10'>
      
        <h1>{item.category}</h1>
        <center>
        <img src={item.image} alt=""  style={{height:"30%",width:"30%"}}/>
        </center>
        <p>{item.price}</p>
        <p>{item.description}</p>

    </div>
  )
}

export default ProfileCard
