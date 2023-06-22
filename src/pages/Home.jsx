import React from 'react'
import Quality from '../components/quality-section/Quality'
import Service from '../components/service/Service'
import Professional from '../components/professional/Professional'
import Contact from '../components/contact/Contact'
import Sidebar from '../components/SideBar/Sidebar'
import Articles from '../components/articles/Articles'
import Covid from '../components/covid/Covid'
import Cleaning from '../components/cleaning/Cleaning'

function Home() {
  return (
    <div>
        <Sidebar/>
        <Quality/>
        <Service/> 
        <Cleaning/>
        <Professional/>
        <Covid/>
        <Articles/>
        <Contact/>
    </div>
  )
}

export default Home