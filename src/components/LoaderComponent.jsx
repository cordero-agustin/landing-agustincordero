import React from 'react'
import { BeatLoader } from 'react-spinners'

const LoaderComponent = () => {
  return (
    <div style={{width:'100%', height:'90vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
      <BeatLoader color="#520101" />
    </div>
  )
}

export default LoaderComponent
