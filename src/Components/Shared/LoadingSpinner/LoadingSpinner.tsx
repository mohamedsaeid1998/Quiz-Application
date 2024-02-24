import React from 'react'
import './LoadingSpinner.module.scss'

const LoadingSpinner = () => {
  return <>
  <div className='flex justify-center items-center bg-orange-100 bg-opacity-10  h-screen '>
    <span className="loader"></span>
  </div>
  </>
}

export default LoadingSpinner