import React from 'react';

const FilesView = () => {
	return (
		<div className="fileView">
			<div className="fileView__row">
				{/* file cards */}
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
		</div>
	);
};

export default FilesView;