'use client';

import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

import PrimaryBtn from '@/app/components/ui/PrimaryBtn';
import SecondaryBtn from '@/app/components/ui/SecondaryBtn';

gsap.registerPlugin(useGSAP, ScrollTrigger);
const MenuPage = () => {
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
				);
		},
		{ scope: menuRef },
	);
	return (
		<div
			ref={menuRef}
			className='relative h-dvh overflow-hidden'>
			<div className='relative z-10 flex items-center h-full'>
				<div className='mx-auto w-full max-w-7xl px-6 '>
					<div className='lg:max-w-150 '>
						<p className='mb-4 text-sm tracking-[0.3em] text-primary uppercase menu-label opacity-0 translate-y-10'>
							Our Menu
						</p>

						<h1 className='font-clash-display lg:text-7xl text-[40px] leading-none tracking-[0.02em] text-text menu-title opacity-0 translate-y-10'>
							Crafted Coffee &
							<br />
							Seasonal Specialties
						</h1>
						<div className='menu-text opacity-0 translate-y-10'>
							<p className='mt-6 lg:max-w-md max-w-2xs text-lg text-text-muted '>
								From signature espresso creations to freshly baked pastries,
								every item is thoughtfully prepared and served with intention.
							</p>

							<div className='mt-10 flex gap-4'>
								<PrimaryBtn />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MenuPage;
