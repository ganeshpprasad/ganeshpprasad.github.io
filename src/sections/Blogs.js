import React from 'react';

export const Blogs = () => {
	const renderBlogs = (item, index) => {
		return (
			<div className='blog-item'>
				<div className='blog-title'>{item.name}</div>
				<div className='blog-title'>{item.img}</div>
				<a target='_blank' href={item.link} className='blog-title'>
					Read more
				</a>
			</div>
		);
	};

	return (
		<div className='blogs-con'>
			<div className='blog-title secondary'>BLOGS</div>
			<div className='blog-items-con'>
				{[
					{
						name: 'React native shallow end',
						img: null,
						link: 'https://www.medium.com',
					},
					{
						name: 'Github',
						img: null,
						link: 'https://www.medium.com',
					},
					{
						name: 'React native deep end',
						img: null,
						link: 'https://www.medium.com',
					},
				].map(renderBlogs)}
			</div>
			{/* <div
				id='retainable-rss-embed'
				data-rss='https://medium.com/feed/@ganeshpprasad'
				data-maxcols='3'
				data-layout='slider'
				data-poststyle='inline'
				data-buttonclass='btn btn-primary'
				data-offset='-100'
			></div> */}
		</div>
	);
};
