

import React from 'react'
import Header from './components/mainPage/header/Header'
import { Outlet } from "react-router-dom";

const Layout = () => {
   return (
      <>
         <Header/>
         <Outlet />
      </>
   )
}

export default Layout