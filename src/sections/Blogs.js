import React from 'react';

export const Blogs = () => {
	const renderBlogs = (item, index) => {
		return (
			<div className='blog-item'>
				<div
					id='retainable-rss-embed'
					data-rss='https://medium.com/feed/@ganeshpprasad'
					data-maxcols='3'
					data-layout='slider'
					data-poststyle='inline'
					data-readmore='Read the rest'
					data-buttonclass='btn btn-primary'
					data-offset='-100'
				></div>
			</div>
		);
	};

	return (
		<div className='blogs-con'>
			{[
				'React Deep End',
				'React Shallow End',
				'React Native Shallow',
			].map(renderBlogs)}
		</div>
	);
};
