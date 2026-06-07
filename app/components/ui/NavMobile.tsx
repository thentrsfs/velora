'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { X } from 'lucide-react';
import { usePathname } from 'next/navigation';

import PrimaryButton from '@/app/components/ui/PrimaryBtn';
import { useUiStore } from '@/app/store/ui';

const NavMobile = () => {
	const pathname = usePathname();

	const isNavOpen = useUiStore((state) => state.isNavOpen);
	const setIsNavOpen = useUiStore((state) => state.setIsNavOpen);

	const handleScrollToSection = ({
		e,
		id,
	}: {
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>;
		id: string;
	}) => {
		e.preventDefault();
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
		setIsNavOpen(false);
	};

	const handleScrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		setIsNavOpen(false);
	};

	useEffect(() => {
		if (isNavOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [isNavOpen]);

	const closeNav = () => {
		setTimeout(() => {
			setIsNavOpen(false);
		}, 300);
	};

	return (
		<div
			className={`fixed w-[70%] right-0 top-0 h-screen flex flex-col justify-between bg-bg backdrop-blur-sm lg:hidden transition-opacity ${isNavOpen ? 'opacity-100 z-50' : 'opacity-0'}`}>
			<div className='pt-4 w-full flex justify-between items-center px-6'>
				<div>
					<h2 className='text-3xl font-clash-display tracking-widest uppercase'>
						Velora
					</h2>
					<div className='w-15 h-0.5 bg-primary my-1' />
					<p className='text-sm text-text/60 leading-relaxed'>
						Crafted. Poured. Shared.
					</p>
				</div>
				<button
					className='absolute top-6 right-6 text-sm md:text-base hover:bg-primary hover:text-bg transition-all duration-300 cursor-pointer'
					onClick={() => setIsNavOpen(!isNavOpen)}>
					<X />
				</button>
			</div>
			<ul className='flex flex-col gap-10 tracking-wide text-2xl text-text px-6'>
				<li>
					<Link
						href='/'
						onClick={handleScrollToTop}>
						Home
					</Link>
				</li>
				<li>
					<Link
						href='/menu'
						onClick={closeNav}>
						Menu
					</Link>
				</li>
				<li>
					<Link
						href='/#about'
						onClick={
							pathname === '/menu'
								? closeNav
								: (e) => handleScrollToSection({ e, id: 'about' })
						}>
						About
					</Link>
				</li>
				<li>
					<Link
						href={pathname === '/' ? '#contact' : '#cta'}
						onClick={(e) =>
							handleScrollToSection({
								e,
								id: pathname === '/' ? 'contact' : 'cta',
							})
						}>
						Contact
					</Link>
				</li>
				<div>
					<PrimaryButton
						onClick={(e) => handleScrollToSection({ e, id: 'contact' })}
					/>
				</div>
			</ul>
			<div className='flex flex-col gap-8 items-center justify-between p-6'>
				<div className='flex items-center gap-6 text-sm text-text-muted'>
					<a
						href='https://www.instagram.com/filip.webdev/'
						target='_blank'
						className='transition-colors duration-300 hover:text-primary'>
						Instagram
					</a>

					<a
						href='https://www.linkedin.com/in/filip-stojkov-315773a1/'
						target='_blank'
						className='transition-colors duration-300 hover:text-primary'>
						LinkedIn
					</a>

					<a
						href='https://www.filipstojkov.com'
						target='_blank'
						className='transition-colors duration-300 hover:text-primary'>
						Portfolio
					</a>
				</div>

				<p className='text-sm text-text-muted'>
					&copy; {new Date().getFullYear()} Velora. All rights reserved.
				</p>
			</div>
		</div>
	);
};

export default NavMobile;
