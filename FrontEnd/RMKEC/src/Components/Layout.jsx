import React, { useEffect } from "react";
import { Outlet, useNavigate } from 'react-router-dom';
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import LoginPage from "../Pages/LoginPage";
import './Layout.css'; 
import Navigation from "./Navigation";
import Attendance_SideBar from "../Attendance_Component/Attendance_SideBar";

const Layout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn = window.localStorage.getItem('loggedIn');
        if (isLoggedIn === 'false') {
          navigate('/'); 
        }
    }, []);

    return (
        <div>
            <NavBar/>
            

            <div className="er">
                <aside>
                <Attendance_SideBar/>
                </aside>
                <div className="pr">
                <Navigation/>
                    <div className="main-frame">
                    <Outlet/>
                    </div>
                </div>
               
            </div>
        </div>
    );
}

export default Layout;
