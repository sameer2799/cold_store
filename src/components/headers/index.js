import React from 'react';
import GdriveLogo from '../../media/Google_Drive_logo.png';

const Header = () => {
  return (
    <div className="header">
        <div className="header__logo">
            <img src={GdriveLogo} alt="Google_Drive_Logo" width={"50px"}/>
            <span>Drive</span>
        </div>
        <div className="header__searchContainer"></div>
        <div className="header__icons"></div>
    </div>
  )
}

export default Header