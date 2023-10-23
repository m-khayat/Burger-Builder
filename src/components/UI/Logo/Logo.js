import React from "react";
import Logo from '../../../assets/Images/burger-logo.png'
import './Logo.css'

const logo = () => (
    <div className="Logo" >
        <img  src={Logo} alt="MyLogo" />
    </div>
)

export default logo;