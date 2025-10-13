import React, {useState} from 'react'
import { Navigate, Outlet } from 'react-router'
import Dashboard from '../Components/HomePage/DashBoard'
import GeneralNavBar from '../Components/GeneralNavBar'

function HomePage() {

  
  return (
    <div>
        <GeneralNavBar></GeneralNavBar>
        <Dashboard></Dashboard>
    </div>
  )
}

export default HomePage