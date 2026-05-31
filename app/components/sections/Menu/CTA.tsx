'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

import PrimaryBtn from '@/app/components/ui/PrimaryBtn';

gsap.registerPlugin(useGSAP, ScrollTrigger);
const CTA = () => {
	const ctaRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			const tl = gsap.timeline({
				scrollTrigger: { trigger: ctaRef.current, start: 'top center' },
			});

			tl.to('.cta-label', {
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: 'power3.out',
			})
				.to(
					'.cta-title',
					{ opacity: 1, y: 0, duration: 1.2, ease: 'power4.out' },
					'-=0.4',
				)
				.to(
					'.cta-text',
					{ opacity: 1, y: 0, duration: 1, ease: 'power4.out' },
					'-=0.8',
				);
		},
		{ scope: ctaRef },
	);
	return (
		<section
			id='cta'
			ref={ctaRef}
			className='lg:pb-34 pb-60 pt-20 flex items-center w-full border-t border-white/10'>
			<div className='lg:max-w-7xl px-6 mx-auto w-full grid md:grid-cols-2 max-md:gap-16 items-center'>
				<div className='lg:max-w-sm max-w-xs'>
					<p className='mb-4 text-sm tracking-[0.3em] text-primary uppercase cta-label opacity-0 translate-y-10'>
						Visit Velora
					</p>

					<h1 className='font-clash-display lg:text-7xl text-[40px] leading-none tracking-[0.02em] text-text cta-title opacity-0 translate-y-10'>
						See You At Velora
					</h1>
					<div className='cta-text opacity-0 translate-y-10'>
						<p className='mt-6 lg:max-w-md max-w-2xs text-lg text-text-muted '>
							Reserve your table and enjoy our handcrafted coffee in a warm,
							intentional atmosphere.
						</p>

						<div className='mt-8 flex gap-4'>
							<PrimaryBtn />
						</div>
					</div>
				</div>

				<div className='hidden md:flex items-center justify-center lg:justify-end '>
					<div className='max-w-lg cta-text opacity-0 translate-y-10'>
						<p className='font-clash-display text-4xl lg:text-[52px] leading-[1.05] text-text'>
							&quot;Every cup <br /> tells a story.&quot;
						</p>

						<div className='mt-10 h-px w-20 bg-primary/30' />

						<p className='mt-6 text-sm tracking-[0.3em] uppercase text-primary'>
							Velora
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTA;
