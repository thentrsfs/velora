'use client';

import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';
import { useUiStore } from '@/app/store/ui';

import PrimaryBtn from '@/app/components/ui/PrimaryBtn';
import SecondaryBtn from '@/app/components/ui/SecondaryBtn';

const Hero = () => {
	const heroRef = useRef<HTMLDivElement>(null);

	const splashScreen = useUiStore((state) => state.splashScreen);

	useEffect(() => {
		if (splashScreen) return;

		const tl = gsap.timeline();

		tl.to(
			'.hero-label',
			{
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: 'power3.out',
			},
			'-=0.2',
		)
			.to(
				'.hero-title',
				{
					opacity: 1,
					y: 0,
					duration: 1.2,
					ease: 'power4.out',
				},
				'-=0.4',
			)
			.to(
				'.hero-text',
				{
					opacity: 1,
					y: 0,
					duration: 1,
					ease: 'power3.out',
				},
				'-=0.8',
			);
	}, [splashScreen]);

	return (
		<section
			id='hero'
			ref={heroRef}
			className='relative h-dvh overflow-hidden'>
			<video
				autoPlay
				muted
				loop
				playsInline
				poster='/images/velora-poster.png'
				className='absolute inset-0 w-full h-full object-cover '>
				<source
					src='/videos/hero-video.mp4'
					type='video/mp4'
				/>
			</video>
			<div className='absolute inset-0 lg:bg-bg/70 bg-bg/75' />
			<div className='absolute bottom-0 left-0 h-20 w-full bg-linear-to-b from-transparent to-bg' />
			<div className='relative z-10 flex h-full items-center'>
				<div className='mx-auto w-full max-w-7xl px-6 '>
					<div className='lg:max-w-150 '>
						<p className='mb-4 text-sm tracking-[0.3em] text-primary uppercase hero-label opacity-0 translate-y-10'>
							Velora Café
						</p>

						<h1 className='font-clash-display lg:text-7xl text-[40px] leading-none tracking-[0.02em] text-text hero-title opacity-0 translate-y-10'>
							Crafted Moments,
							<br />
							Poured Daily.
						</h1>
						<div className='hero-text opacity-0 translate-y-10'>
							<p className='mt-6 lg:max-w-md max-w-2xs text-lg text-text-muted '>
								Experience specialty coffee and a warm, intentional atmosphere
								in every cup.
							</p>

							<div className='mt-10 flex gap-4'>
								<PrimaryBtn />
								<SecondaryBtn href='/menu'>Explore Menu</SecondaryBtn>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
