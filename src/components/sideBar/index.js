import React from 'react';
import NewFile from './NewFile';
import SideBarItem from './SideBarItem';
import '../../styles/SideBar.css';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import StorageIcon from '@mui/icons-material/Storage';

const index = () => {
  return (
    <div className='sideBar'>
        <NewFile />
        <div className="sideBar__itemsContainer">
            <SideBarItem arrow icon={(<InsertDriveFileIcon />)} label={'My Drive'} />
            <SideBarItem arrow icon={(<ImportantDevicesIcon />)} label={'Computer'} />
            <SideBarItem icon={(<PeopleAltIcon />)} label={'Shared with Me'} />
            <SideBarItem icon={(<QueryBuilderIcon />)} label={'Recent'} />
            <SideBarItem icon={(<StarBorderIcon />)} label={'Starred'} />
            <SideBarItem icon={(<DeleteOutlineIcon />)} label={'Bin'} />

            <hr/>

            <SideBarItem icon={(<StorageIcon />)} label={'Storage'} />

        </div>
    </div>
  )
}

export default index