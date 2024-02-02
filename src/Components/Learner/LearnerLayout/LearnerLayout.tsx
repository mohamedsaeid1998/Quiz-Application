import React from 'react'
import './LearnerLayout.module.scss'
import { Outlet } from 'react-router-dom'

const LearnerLayout = () => {
  return <>
    <div>
    <Outlet />
    </div>
  </>
}

export default LearnerLayout