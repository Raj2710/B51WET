import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import {UserContext} from '../utils/UserContextComponent'
function Sidebar() {
    console.log(useContext(UserContext))
  return <>
  <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    <Link to='/dashboard' className="sidebar-brand d-flex align-items-center justify-content-center">
        <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
            </div>
        <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
    </Link>
    <hr className="sidebar-divider my-0"/>
    <li className="nav-item">
        <Link to={'/dashboard'} className="nav-link">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
        </Link>
    </li>
    <li className="nav-item">
        <Link to={'/add-user'} className="nav-link">
            <i className="fas fa-fw fa-cog"></i>
            <span>Add User</span>
        </Link>
    </li>
    <li className="nav-item">
        <Link to={'/nested-example'} className="nav-link">
            <i className="fas fa-fw fa-clipboard"></i>
            <span>Nested Routing</span>
        </Link>
    </li>
    <hr className="sidebar-divider"/>
</ul>
  </>
}
export default Sidebar