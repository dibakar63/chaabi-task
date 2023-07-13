import React from 'react'
import '../App.css'
import {FcKey} from 'react-icons/fc'
import {MdModelTraining} from 'react-icons/md'
import {PiUserSquare} from 'react-icons/pi'
import {BiSolidMap} from 'react-icons/bi'
import {BiSolidDashboard} from 'react-icons/bi'


const Sidebar = () => {
  return (
    <div className='sidebar'>
    <h1 className='header'>chabb<FcKey/></h1>

    <ul className='ul-list'>
         <li className='list'><BiSolidDashboard/> Dashboard</li>
        <li className='list'><MdModelTraining /> Trainings</li>
        <li className='list'><PiUserSquare /> Users</li>
        <li className='list'><BiSolidMap /> Analytics</li>
        <li className='list'> <BiSolidMap /> Myaccount</li>
        <li className='list'> <BiSolidMap /> Support</li>
    </ul>
      
    </div>
  )
}

export default Sidebar
