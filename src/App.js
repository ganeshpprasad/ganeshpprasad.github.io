import React from 'react';
import './App.sass';
import { Main, Blogs, Templates, Projects, Contact } from './sections';
import { Parallax } from 'react-spring/renderprops-addons';

function App() {
	let parallax;
	return (
		<div className='App'>
			<Parallax pages={4} scrolling={true} ref={ref => (parallax = ref)}>
				<Main />
				<Projects />
				<Blogs />
				<Templates />
				<Contact />
			</Parallax>
		</div>
	);
}

export default App;
