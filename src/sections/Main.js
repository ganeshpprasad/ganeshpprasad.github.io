import React from 'react';
import { useTrail, animated, useSpring } from 'react-spring';
import { DEV1, DEV2, MobDev, WebDev } from '../assets/icons';
import { ParallaxLayer } from 'react-spring/renderprops-addons';

const config = { mass: 5, tension: 2000, friction: 200 };
const items = [
	"I'm working as a freelance Web and Mobile app developer since I wanted to flex my networking and communication skills.",
	"I'm also seeking interesting opportunities in the mobile app development field.",
];
export const Main = () => {
	// const props = useSpring({ opacity: 1, from: { opacity: 0 } });

	const trail = useTrail(items.length, {
		config,
		opacity: 1,
		x: 0,
		height: 60,
		from: { opacity: 0, x: 20, height: 0 },
	});

	const spring = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } });

	return (
		<div className={'main-con'}>
			<div className='left-con'>
				<h2 className={'salut'}>Hello!</h2>
				<h2 className={'primary'}>I'm Ganesh Prasad P</h2>
				<div>
					{trail.map(({ x, height, ...rest }, index) => (
						<animated.div
							className={
								index > 0 ? 'secondary' : 'secondary-black'
							}
							key={items[index]}
							style={{
								...rest,
								transform: x.interpolate(
									x => `translate3d(0,${x}px,0)`
								),
							}}
						>
							<animated.div style={{ height: height * 2 }}>
								{items[index]}
							</animated.div>
						</animated.div>
					))}
				</div>
				<div>
					{/* <ParallaxLayer offset={0} speed={1}> */}
					<animated.div style={spring}>
						<MobDev />
						<WebDev />
					</animated.div>
					{/* </ParallaxLayer> */}
				</div>
			</div>
			<div className='right-con'>
				<img src='' alt='' />
			</div>
		</div>
	);
};
