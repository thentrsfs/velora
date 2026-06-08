'use client';

import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

import SecondaryBtn from '@/app/components/ui/SecondaryBtn';

gsap.registerPlugin(useGSAP, ScrollTrigger);
const Menu = () => {
	const menuRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			const tl = gsap.timeline({
				scrollTrigger: { trigger: menuRef.current, start: 'top center' },
			});

			tl.to('.menu-label', {
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: 'power3.out',
			})
				.to(
					'.menu-title',
					{ opacity: 1, y: 0, duration: 1.2, ease: 'power4.out' },
					'-=0.4',
				)
				.to(
					'.menu-text',
					{ opacity: 1, y: 0, duration: 1, ease: 'power4.out' },
					'-=0.8',
				)
				.fromTo(
					'.menu-card',
					{ opacity: 0, y: 40 },
					{
						opacity: 1,
						y: 0,
						duration: 1,
						ease: 'power3.out',
						stagger: 0.2,
					},
					'-=1',
				);
		},
		{ scope: menuRef },
	);

	return (
		<section
			id='menu'
			ref={menuRef}
			className='relative lg:h-dvh h-full lg:py-32 py-20 flex items-center'>
			<div className='mx-auto w-full max-w-7xl px-6 grid lg:grid-cols-2 max-lg:gap-10 items-center'>
				<div className='lg:max-w-lg md:max-w-md max-w-xs'>
					<p className='mb-4 text-sm tracking-[0.3em] text-primary uppercase menu-label opacity-0 translate-y-10'>
						Signature Menu
					</p>

					<h2 className='font-display lg:text-6xl md:text-5xl text-4xl leading-none text-text menu-title opacity-0 translate-y-10'>
						Crafted With
						<br />
						Precision & Warmth
					</h2>
					<div className='menu-text opacity-0 translate-y-10'>
						<p className='mt-8 max-w-sm text-lg text-text-muted'>
							Every drink at Velora is prepared with carefully selected beans
							and intentional technique.
						</p>
						<div className='mt-8'>
							<SecondaryBtn href='/menu'>View Full Menu</SecondaryBtn>
						</div>
					</div>
				</div>

				<div className='grid grid-cols-2 gap-5'>
					<div
						className='col-span-2 menu-card opacity-0 group overflow-hidden rounded-4xl border border-white/5 bg-white/3 backdrop-blur-xl
transition-all duration-500 ease-out'>
						<div className='relative h-75 overflow-hidden'>
							<Image
								src='/images/black-coffee.jpg'
								alt='Menu 1'
								fill
								loading='eager'
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
								className='object-cover transition-transform duration-700 group-hover:scale-105 ease-out'
							/>
						</div>
						<div className='lg:p-6 p-4 flex items-center justify-between'>
							<div>
								<h3 className='text-xl text-text font-clash-display tracking-wide'>
									Midnight Roast
								</h3>

								<p className='mt-2 text-sm text-text-muted max-md:max-w-40'>
									Rich dark roast with deep chocolate notes.
								</p>
							</div>

							<p className=' text-primary font-medium tracking-wide'>169 Kč</p>
						</div>
					</div>

					<div
						className='group menu-card opacity-0 overflow-hidden rounded-3xl border border-white/5 bg-white/3 backdrop-blur-xl
transition-all duration-500 ease-out'>
						<div className='relative h-50 overflow-hidden '>
							<Image
								src='/images/cappuccino-2.jpg'
								alt='Menu 2'
								fill
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
								className='object-cover transition-transform duration-700 group-hover:scale-105 ease-out'
							/>
						</div>
						<div className='lg:p-6 p-4 '>
							<div className='flex max-md:flex-col max-md:gap-2 items-center justify-between'>
								<h3 className='lg:text-xl text-text font-clash-display tracking-wide'>
									Velvet Latte
								</h3>
								<p className=' text-primary font-medium tracking-wide'>
									109 Kč
								</p>
							</div>
							<p className='mt-2 text-sm text-text-muted'>
								Smooth espresso with velvety milk foam.
							</p>
						</div>
					</div>
					<div
						className='group menu-card opacity-0 overflow-hidden rounded-3xl border border-white/5 bg-white/3 backdrop-blur-xl
transition-all duration-500 ease-out'>
						<div className='relative h-50 overflow-hidden '>
							<Image
								src='/images/esspresso-2.jpg'
								alt='Menu 2'
								fill
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
								className='object-cover transition-transform duration-700 group-hover:scale-105 ease-out'
							/>
						</div>
						<div className='lg:p-6 p-4 '>
							<div className='flex max-md:flex-col max-md:gap-2 items-center justify-between'>
								<h3 className='lg:text-xl text-text font-clash-display tracking-wide'>
									Espresso Noir
								</h3>
								<p className=' text-primary font-medium tracking-wide'>
									129 Kč
								</p>
							</div>
							<p className='mt-2 text-sm text-text-muted'>
								Bold espresso with a smooth finish.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Menu;
