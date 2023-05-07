import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from './Topbar'
import Sidebar from './Sidebar'

function Portal() {
  return (
    <>
    {/* <!-- Page Wrapper --> */}
    <div id="wrapper">
      <Sidebar></Sidebar>
      {/* <!-- Content Wrapper --> */}
      <div id="content-wrapper" className="d-flex flex-column">
        {/* <!-- Main Content --> */}
        <div id="content">
          <Topbar></Topbar>
          <Outlet></Outlet>
           
        </div>
        {/* <!-- End of Main Content --> */}
      </div>
      {/* <!-- End of Content Wrapper --> */}
    </div>
    {/* <!-- End of     Page Wrapper --> */}
    </>
  )
}

export default Portal