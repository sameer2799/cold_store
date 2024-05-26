import React from 'react'
import '../../styles/SidebarItem.css';
import { ArrowRight } from '@mui/icons-material'

const SideBarItem = ({ arrow, icon, label }) => {
  return (
    <div className='sidebarItem'>
		<div className='sidebarItem__arrow'>
			{arrow && (<ArrowRight />)}
		</div>
		
		<div className='sidebarItem__main'>
			{icon}
			<p>{label}</p>
		</div>
    </div>
  );
}

export default SideBarItem