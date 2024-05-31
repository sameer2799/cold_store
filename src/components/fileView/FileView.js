import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import FileItem from './FileItem';
import FileCard from './FileCard';
import { db } from "../../firebase";
import "../../styles/FilesView.css";


const FilesView = () => {

	const [ files, setFiles ] = useState([]);

	useEffect(() => {
		const fetchFiles = async () => {
			const querySnapshot = await getDocs(collection(db, 'myfiles'));
			setFiles(querySnapshot.docs.map(doc => ({
				id: doc.id,
				item: doc.data(),
			})));
		}
		fetchFiles();
		}, []);
	

	return (
		<div className="fileView">
			<div className="fileView__row">
				{
					files.slice(0, 5).map(({ id, item}) => (
						<FileCard  name={item.caption} />
					))
				}
			</div>
			<div className="fileView__titles">
				<div className="fileView__titles--left">
					<p>Name</p>
				</div>
				<div className="fileView__titles--right">
					<p>Last Modified</p>
					<p>File Size</p>
				</div>
			</div>
			{
				files.map(({id, item}) => (
					<FileItem id={id} caption={item.caption} timestamp={item.timestamp} fileUrl={item.fileUrl} size={item.size} />
				))
			}
		</div>
	);
};

export default FilesView;