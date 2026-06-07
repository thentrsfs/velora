'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

import { MenuCategory } from '@/app/types/menu';

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Props = {
	menuCategories: MenuCategory[];
};

const MenuContent = ({ menuCategories }: Props) => {
	const menuRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			gsap.utils
				.toArray<HTMLDivElement>('.menu-category')
				.forEach((category) => {
					const title = category.querySelector('.menu-title');
					const items = category.querySelectorAll('.menu-item');

					const tl = gsap.timeline({
						scrollTrigger: { trigger: category, start: 'top 85%' },
					});

					tl.to(title, {
						opacity: 1,
						y: 0,
						duration: 0.6,
						ease: 'power3.out',
					}).to(
						items,
						{
							opacity: 1,
							y: 0,
							stagger: 0.1,
							duration: 0.8,
							ease: 'power3.out',
						},
						'-=0.2',
					);
				});
		},
		{ scope: menuRef },
	);

	return (
		<section
			id='full-menu'
			ref={menuRef}
			className='min-h-dvh'>
			<div className='mx-auto w-full max-w-7xl px-6 py-20 mt-10'>
				<h1 className='text-5xl tracking-wider font-clash-display'>Our Menu</h1>
				<div className='flex flex-col gap-18'>
					{menuCategories.map((category) => (
						<div
							key={category._id}
							className='menu-category'>
							<h2 className='pt-20 font-bold text-primary tracking-[0.3em] uppercase pb-2 menu-title opacity-0 translate-y-4'>
								{category.title}
							</h2>
							<div className='mt-8 grid sm:grid-cols-2 gap-10'>
								{category.items.map((item) => (
									<div
										key={item._id}
										className='p-6 border-b border-primary/50 lg:max-w-lg group menu-item opacity-0 translate-y-4'>
										<div className='flex justify-between items-center text-text mb-1'>
											<h3 className='font-bold text-lg group-hover:text-primary transition-colors duration-300'>
												{item.name}
											</h3>
											<p className='font-medium text-primary'>{item.price}</p>
										</div>
										<p className='text-sm text-text/80'>{item.description}</p>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default MenuContent;
