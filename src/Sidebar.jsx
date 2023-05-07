import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    
     <ul className="navbar-nav bg-gradient-info sidebar sidebar-dark accordion" id="accordionSidebar">

  
     <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
         <div className="sidebar-brand-icon rotate-n-15">
             <i className="fas fa-laugh-wink"></i>
         </div>
         <div className="sidebar-brand-text mx-3">Crud Library </div>
     </a>

    
     <hr className="sidebar-divider my-0" />

    
     <li className="nav-item active">
         <Link className="nav-link" to="/Portal/Dashboard">
             <i className="fas fa-fw fa-tachometer-alt"></i>
             <span>Dashboard</span>
         </Link>
     </li>

    
     <hr className="sidebar-divider my-0" />

     {/* <!-- Nav Item - Dashboard --> */}
     <li className="nav-item active">
         <Link className="nav-link" to="/portal/Members">
             <i className="fas fa-fw fa-tachometer-alt"></i>
             <span>Members</span>
         </Link>
     </li>

     {/* <!-- Divider --> */}
     <hr className="sidebar-divider my-0" />

     {/* <!-- Nav Item - Dashboard --> */}
     <li className="nav-item active">
         <Link className="nav-link" to="/portal/Books">
             <i className="fas fa-fw fa-tachometer-alt"></i>
             <span>Books</span>
         </Link>
     </li>
 </ul>
 //<!-- End of Sidebar -->
  )
}

export default Sidebar