import React from 'react';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import "../../styles/NewFile.css";


import { firebaseApp, storageRef, db } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@mui/material/Modal';

function getModalStyle() {
	return {
		top: `50%`,
		left: `50%`,
		transform: `translate(-50%, -50%)`,
	};
}

const useStyles = makeStyles((theme) => ({
	paper: {
		position: 'absolute',
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

const NewFile = () => {
	const classes = useStyles();
	const [ modalStyle ] = useState(getModalStyle);
	const [ open, setOpen ] = useState(false);
	const [ file, setFile ] = useState(null);
	const [ uploading, setUploading ] = useState(false);
	
	const handleOpen = () => {
		setOpen(true);
	};
	
	const handleClose = () => {
		setOpen(false);
	};
	
	const handleChange = (e) => {
		if(e.target.files[0]){
			setFile(e.target.files[0])
		}
	};
	
	const handleUpload = () => {
		setUploading(true);
		
		uploadBytes(ref(storageRef, `files/${file.name}`), file).then(snapshot => {
			console.log(snapshot);
			
			getDownloadURL(snapshot.ref).then(url => {
				db.collection('myfiles').add({
					timestamp: firebaseApp.firestore.FieldValue.serverTimestamp(),
					caption: file.name,
					fileUrl: url,
					size: snapshot._delegate.bytesTransferred,
				})
				setUploading(false);
				setOpen(false);
				setFile(null);
			})
		})
	};
	
	return (
		<div className='newFile'>
		    <div className="newFile__container" onClick={handleOpen}>
		        <AddIcon />
		        <p>New</p>
		    </div>
		    <Modal open={open} onClose={handleClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
		    	<div style={modalStyle} className={classes.paper}>
		    		<p>Select files to upload!</p>
		    		{
		    			uploading ? (
		    				<p>Uploading...</p>
		    			) : (
		    				<>
		    					<input type="file" onChange={handleChange}/>
		    					<button onClick={handleUpload}>Upload</button>
		    				</>
		    			)
		    		}
		    	</div>
		    </Modal>
		</div>
  )
}

export default NewFile