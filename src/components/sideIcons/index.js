import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import '../../styles/SideIcon.css';
import GCalLogo from '../../media/Google_Calendar_icon_(2020).png';
import GKeepLogo from '../../media/Google_Keep_icon_(2020).png';
import GTaskLogo from '../../media/Google_Tasks_Icon.png';


const index = () => {
  return (
    <div className='sideIcons'>
        <div className='sideIcons__top'>
            <img src={GCalLogo} alt='Google Calendar Icon' />
            <img src={GKeepLogo} alt='Google Keep Icon'/>
            <img src={GTaskLogo} alt='Google Tasks Icon'/>
        </div>

        <hr/>

        <div className='sideIcons__plusIcon'>
            <AddIcon />
        </div>
    </div>
  )
}

export default index