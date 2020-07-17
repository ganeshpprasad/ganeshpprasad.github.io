import React from 'react';

export const Blogs = () => {
	const renderBlogs = (item, index) => {
		return (
			<div className='blog-item'>
				<div className='blog-name'>{item.name}</div>
				<div className='blog-img-con'>
					<img className='blog-img' src={item.img} alt='' />
				</div>
				<a target='_blank' href={item.link} className='blog-link'>
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
						img:
							'https://miro.medium.com/max/700/0*eII6rCGzMjXKJeKU',
						link: 'https://www.medium.com',
					},
					{
						name: 'Github',
						img:
							'https://miro.medium.com/max/700/0*eII6rCGzMjXKJeKU',
						link:
							'https://engineering.hiverhq.com/building-github-apps-to-fine-tune-github-experience-fa7b3be41e32?source=your_stories_page---------------------------&gi=efbae7c75f9e',
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
