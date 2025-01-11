import React from 'react';
import "./Nav.css";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

function Nav() {
    const [show, handleShow] = useState(false);
    const navigate = useNavigate();

    const transitionNavBar = () => {
        if (window.scrollY > 100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    }

    useEffect(() =>{
        window.addEventListener("scroll", transitionNavBar);
        return ()=> window.removeEventListener("scroll", transitionNavBar);
    }, [])
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
                <img onClick={() => navigate("/")}className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Netflix-Logo.png" alt="" />
                <img onClick={() => navigate("/profile")} className="nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt=""/>
            </div>

        </div>
    )
}

export default Nav
