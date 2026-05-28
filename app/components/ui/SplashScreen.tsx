'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { useUiStore } from '@/app/store/ui';

gsap.registerPlugin(useGSAP);

const SplashScreen = () => {
	const splashRef = useRef<HTMLDivElement>(null);

	const splashScreen = useUiStore((state) => state.splashScreen);
	const setSplashScreen = useUiStore((state) => state.setSplashScreen);

	useGSAP(
		() => {
			if (!splashScreen) return;

			const tl = gsap.timeline();

			tl.to('.splash-logo', {
				y: 0,
				opacity: 1,
				duration: 1.2,
				ease: 'power4.out',
			}).to(
				splashRef.current,
				{
					yPercent: -100,
					duration: 1.3,
					ease: 'power4.inOut',
					onComplete: () => setSplashScreen(false),
				},
				'-=0.4',
			);
		},
		{ scope: splashRef },
	);

	return (
		<div
			ref={splashRef}
			className='fixed inset-0 bg-bg flex items-center justify-center z-50 will-change-transform'>
			<div className='overflow-hidden'>
				<h1
					className='splash-logo
	translate-y-full
	opacity-0
	font-clash-display
	lg:text-6xl
    text-4xl
	uppercase
	tracking-[0.2em]
	text-text'>
					Velora
				</h1>
			</div>
		</div>
	);
};

export default SplashScreen;
