import React from 'react'
import './InstructorLayout.module.scss'
import { Outlet } from 'react-router-dom'

const InstructorLayout = () => {
  return <>
    <div>
    <Outlet />
    </div>
  </>
}

export default InstructorLayout