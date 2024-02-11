import React from 'react'
import './MasterLayout.module.scss'
import { Outlet } from 'react-router-dom'

const MasterLayout = () => {
  return <>
    <div>
    <Outlet />
    </div>
  </>
}

export default MasterLayout