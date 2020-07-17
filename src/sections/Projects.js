import React, { Component, useState } from 'react';
import { Link } from '../assets/icons';
import CLICK from '../assets/click.png';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';

export const projects = {
	NEWS_APP: 'newsApp',
	VOICE_REC: 'voiceRecorder',
};

export const techs = {
	RN: 'React Native',
	R: 'React',
	Next: 'Nextjs',
	Redux: 'Redux',
	Hooks: 'Hooks',
	Node: 'Nodejs',
	Heroku: 'Heroku',
	Back: 'Backbone',
	Docker: 'Docker',
	GMail: 'GMail APIs',
	Bitrise: 'Bitrise',
	TP: 'Typescript',
};

class ProjectItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let desc, title, url, offset, techstack, sub, when, info, appUrl;
		let desc2,
			title2,
			url2,
			offset2,
			techstack2,
			sub2,
			when2,
			info2,
			appUrl2;

		switch (this.props.project) {
			case projects.NEWS_APP:
				info = `PERSONAL PROJECT`;
				appUrl = `https://news-app-gp.herokuapp.com/`;
				url = `https://github.com/ganeshpprasad/newsapp`;
				title = `A News App`;
				desc = [
					`A news app which fetches data from the NewsAPI.
			The app provides a space to checkout same topic news from different publications.
			`,
				];
				offset = 0;
				techstack = [
					techs.TP,
					techs.R,
					techs.Next,
					techs.Hooks,
					techs.Heroku,
				];
				// 2
				info2 = `FREELANCE`;
				appUrl2 = `https://menucode.in/1`;
				title2 = `Food ordering service`;
				desc2 = [
					`A single platform for ordering food inside the hotel and outside for multiple 
					hotels in India.`,
					`Note: Mobile only website.`,
				];
				offset2 = 0;
				techstack2 = [
					techs.TP,
					techs.R,
					techs.Next,
					techs.Hooks,
					techs.Heroku,
				];
				break;
			case projects.VOICE_REC:
				info = `PROJECTS`;
				url = `https://github.com/ganeshpprasad/journalRecorder`;
				title = `AudioJournal`;
				desc = [
					`A voice recorder app which will generate transcripts.
						You can use this app to record random thoughts you wanna
						get back to and read them later`,
					`Meetings can also be recorded for written records.`,
				];
				offset = 0;
				techstack = [
					techs.RN,
					techs.Redux,
					techs.Bitrise,
					techs.Node,
					techs.Docker,
					techs.Heroku,
				];
				info2 = `FREELANCE`;
				url2 = `https://ardeo.in`;
				title2 = `Ardeo brand  website`;
				desc2 = [
					`Ardeo is a brand building a sustainable product cycle. Their first apparel 
					is made using recycled PET bottles. They manufacture apparel from other organic fibres.`,
				];
				offset2 = 0;
				techstack2 = [techs.Next, techs.Node, techs.Docker];
				break;
			case 'Helio':
				info = `FREELANCE`;
				url = `https://github.com/ganeshpprasad/journalRecorder`;
				appUrl = `helioscope.in`;
				title = `Helioscope`;
				desc = [
					`A product website for Helioscope. They are building solar tracker which 
					can improve the solar panel efficiency by keeing the panel at right angles.`,
				];
				offset = 0;
				techstack = [
					techs.Next,
					techs.Node,
					techs.Docker,
					techs.Heroku,
				];
				info2 = `FREELANCE`;
				url2 = `https://ardeo.in`;
				title2 = `Ardeo brand  website`;
				desc2 = [
					`Ardeo is a brand building a sustainable product cycle. Their first apparel 
					is made using recycled PET bottles. They manufacture apparel from other organic fibres.`,
				];
				offset2 = 0;
				techstack2 = [techs.Next, techs.Node, techs.Docker];
				break;
			default:
				info = `FREELANCE`;
				title = `Health Innovation Exchange`;
				sub = ` Website Development for Zivost`;
				desc = [
					`Due to COVID-19 the UNAIDS conference Health Innovation Exchange was 
					a virtual conference `,
					`The website had chat and video conferencing integration`,
				];
				offset = 0;
				when = 'May 2020';
				techstack = [techs.R, techs.Redux];
				info2 = `WORK EXPERIENCE`;
				appUrl = 'https://event.healthinnovation.exchange';
				title2 = `Hiver`;
				sub2 = ` Front End and React Native Developer`;
				desc2 = [
					`I started off as a web developer and moved
				on to React Native develoment. Solely maintaining the app
				for about 6 months. `,
					`I got to build Hiver Analytics using chartjs`,
					`I built react-native app and setup CI/CD`,
				];
				offset2 = 0;
				when2 = '2y 9m';
				techstack2 = [
					techs.Back,
					techs.R,
					techs.RN,
					techs.TP,
					techs.Docker,
					techs.GMail,
					techs.Redux,
					techs.Hooks,
					techs.Bitrise,
				];
				break;
		}

		return (
			<div
				className='proj-con'
				style={{
					cursor: `url(${CLICK}), auto`,
				}}
			>
				<ParallaxLayer
					style={{ display: 'flex' }}
					offset={offset}
					// speed={0.5}
				>
					<div className='proj-sec'>
						<div className='secondary info'>{info}</div>
						<h2 className='primary proj-title'>{title}</h2>
						<h4 className='tertiary'>{sub}</h4>
						{when ? (
							<h4 className='tertiary-black'>{when}</h4>
						) : null}
						{desc.map(text => {
							return (
								<p className='secondary-black proj-desc'>
									{text}
								</p>
							);
						})}
						{url ? (
							<a
								className='proj-link'
								rel='noopener noreferrer'
								target='_blank'
								href={url}
							>
								Github
								<Link style={'width: 50rem'} />
							</a>
						) : null}
						{appUrl ? (
							<a
								className='proj-link'
								rel='noopener noreferrer'
								target='_blank'
								href={appUrl}
							>
								Open App
								<Link style={'width: 50rem'} />
							</a>
						) : null}
						<div className={'tech-con'}>
							{techstack.map(item => {
								return <span className='tech'>{item}</span>;
							})}
						</div>
					</div>
					<div
						className='middle-btn'
						onClick={this.props.nextProject}
					>
						REV
					</div>
					<div className='proj-desc-con'>
						<div className='secondary info'>{info2}</div>
						<h2 className='primary proj-title'>{title2}</h2>
						<h4 className='tertiary'>{sub2}</h4>
						{when2 ? (
							<h4 className='tertiary-black'>{when2}</h4>
						) : null}
						{desc2.map(text => {
							return (
								<p className='secondary-black proj-desc'>
									{text}
								</p>
							);
						})}
						{url2 ? (
							<a
								className='proj-link'
								rel='noopener noreferrer'
								target='_blank'
								href={url2}
							>
								Github
								<Link style={'width: 50rem'} />
							</a>
						) : null}
						{appUrl2 ? (
							<a
								className='proj-link'
								rel='noopener noreferrer'
								target='_blank'
								href={appUrl2}
							>
								Open App
								<Link style={'width: 50rem'} />
							</a>
						) : null}
						<div className={'tech-con'}>
							{techstack2.map(item => {
								return <span className='tech'>{item}</span>;
							})}
						</div>
					</div>
				</ParallaxLayer>
			</div>
		);
	}
}

export const Projects = props => {
	const [projIndex, setProjIndex] = useState(0);

	let projectValues = [null, projects.VOICE_REC, projects.NEWS_APP];

	const nextProject = () => {
		setProjIndex((projIndex + 1) % 3);
	};

	return (
		<>
			<ProjectItem
				nextProject={nextProject}
				project={projectValues[projIndex]}
			/>
		</>
	);
};
