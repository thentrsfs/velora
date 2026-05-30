'use client';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Image from 'next/image';

gsap.registerPlugin(useGSAP, ScrollTrigger);
const About = () => {
	const aboutRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			const tl = gsap.timeline({
				scrollTrigger: { trigger: aboutRef.current, start: 'top center' },
			});

			tl.to('.about-image', {
				opacity: 1,
				y: 0,
				duration: 1,
				ease: 'power3.out',
			})
				.to(
					'.about-label',
					{
						opacity: 1,
						y: 0,
						duration: 0.8,
						ease: 'power3.out',
					},
					'-=0.6',
				)
				.to(
					'.about-title',
					{ opacity: 1, y: 0, duration: 1.2, ease: 'power4.out' },
					'-=0.4',
				)
				.to(
					'.about-text',
					{ opacity: 1, y: 0, duration: 1, ease: 'power4.out' },
					'-=0.8',
				);
		},
		{ scope: aboutRef },
	);
	return (
		<section
			id='about'
			ref={aboutRef}
			className='lg:h-dvh h-full grid lg:grid-cols-2 items-center px-6 lg:max-w-7xl mx-auto relative max-md:gap-10 lg:py-32 py-20'>
			<div className='relative lg:h-160 h-90 overflow-hidden group rounded-4xl about-image opacity-0 translate-y-10'>
				<Image
					src='/images/about-image-1.jpg'
					alt='Velora Cafe'
					fill
					sizes='(max-width: 768px) 100vw, 50vw'
					className='object-cover rounded-4xl group-hover:scale-102 transition-all duration-700 ease-out '
					loading='eager'
				/>
				<div className='absolute inset-0 bg-bg/20' />
			</div>

			<div className='lg:max-w-lg max-w-xs lg:mx-auto'>
				<p className='mb-4 text-sm tracking-[0.3em] text-primary uppercase about-label opacity-0 translate-y-10'>
					ABOUT VELORA
				</p>

				<h2 className='font-display lg:text-6xl text-4xl leading-none text-text about-title opacity-0 translate-y-10'>
					Designed For
					<br />
					Slow Moments.
				</h2>
				<div className='about-text opacity-0 translate-y-10'>
					<p className='mt-8 max-w-sm text-lg text-text-muted'>
						Velora blends modern café culture with warm, intentional design —
						creating a space where coffee, conversation, and atmosphere come
						together.
					</p>
					<span className='block mt-8 text-sm text-text-muted/70'>
						Since 2026
					</span>
				</div>
			</div>
		</section>
	);
};

export default About;
