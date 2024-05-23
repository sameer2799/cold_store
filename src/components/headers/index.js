import '../../styles/Header.css';
import React from 'react';
import GdriveLogo from '../../media/Google_Drive_logo.png';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';

const Header = ({ userPhoto }) => {
  return (
    <div className="header">
        <div className="header__logo">
            <img src={GdriveLogo} alt="Google_Drive_Logo" width={"50px"}/>
            <span>Drive</span>
        </div>
        <div className="header__searchContainer">
          <div className="header__searchBar">
            <SearchIcon />
            <input type="text" placeholder="Search in Drive" />
            <ExpandMoreIcon />
          </div>
        </div>
        <div className="header__icons">
          <span>
            <HelpOutlineIcon />
            <SettingsIcon />
          </span>
          <AppsIcon />
          <img src={userPhoto} alt="User Photo" />
        </div>
    </div>
  )
}

export default Header