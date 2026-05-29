'use client';

import { gsap } from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Form from '@/app/components/ui/Form';
import Footer from '@/app/components/ui/Footer';

gsap.registerPlugin(useGSAP, ScrollTrigger);
const Contact = () => {
	const contactRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			const tl = gsap.timeline({
				scrollTrigger: { trigger: contactRef.current, start: 'top center' },
			});
			tl.to('.contact-label', {
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: 'power3.out',
			})
				.to(
					'.contact-title',
					{ opacity: 1, y: 0, duration: 1.2, ease: 'power4.out' },
					'-=0.4',
				)
				.to(
					'.contact-text',
					{ opacity: 1, y: 0, duration: 1, ease: 'power4.out' },
					'-=0.8',
				)
				.to(
					'.contact-info',
					{
						opacity: 1,
						y: 0,
						duration: 1,
						ease: 'power3.out',
					},
					'-=0.8',
				)
				.to(
					'.form-container',
					{
						opacity: 1,
						y: 0,
						duration: 1,
						ease: 'power3.out',
					},
					'-=0.8',
				);
		},
		{ scope: contactRef },
	);
	return (
		<section
			id='contact'
			ref={contactRef}
			className='min-h-screen relative lg:py-32 pt-20 pb-60 flex items-center'>
			<div className='grid lg:grid-cols-2 items-center max-md:gap-10 w-full lg:max-w-7xl mx-auto px-6'>
				<div className='lg:max-w-lg max-w-xs'>
					<p className='mb-4 text-sm tracking-[0.3em] text-primary uppercase contact-label opacity-0 translate-y-10'>
						Get in touch
					</p>

					<h2 className='font-display lg:text-6xl text-4xl leading-none text-text contact-title opacity-0 translate-y-10'>
						Visit Velora
					</h2>

					<p className='mt-8 max-w-sm text-lg text-text-muted contact-text opacity-0 translate-y-10'>
						Crafted coffee, warm atmosphere, and intentional moments — served
						daily in the heart of the city.
					</p>
					<div className='mt-12 space-y-8 text-text-muted contact-info opacity-0 translate-y-10'>
						<div>
							<p className='text-sm uppercase tracking-[0.25em] text-white/40'>
								Location
							</p>

							<p className='mt-2 text-lg text-text'>Prague, Czech Republic</p>
						</div>

						<div>
							<p className='text-sm uppercase tracking-[0.25em] text-text/40'>
								Opening Hours
							</p>

							<div className='mt-2 space-y-1 text-lg text-text'>
								<p>Mon — Fri: 8am — 8pm</p>
								<p>Sat — Sun: 9am — 10pm</p>
							</div>
						</div>
					</div>
				</div>
				<div className='form-container opacity-0 translate-y-10'>
					<Form />
				</div>
			</div>
			<Footer />
		</section>
	);
};

export default Contact;
