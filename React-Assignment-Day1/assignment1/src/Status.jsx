import React from 'react'

function Status({state}) {
  if({state}){
    return (
        <center>
        <h1>Operation is success</h1>
        </center>
    )
  }else{
    return(
      <center>
        <h1>ERROR!</h1>
      </center>
    )
  }
}

export default Status