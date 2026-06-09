'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { useUiStore } from '@/app/store/ui';

import PrimaryButton from '@/app/components/ui/PrimaryBtn';

const Nav = () => {
	const pathname = usePathname();
	const [isScrolled, setIsScrolled] = useState(false);

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
	};

	const handleScrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 w-full z-40 bg-transparent transition-transform duration-300 ${isScrolled && 'bg-bg/80 backdrop-blur-xl border-b border-white/5'}`}>
			<nav className='flex items-center justify-between mx-auto max-w-7xl py-4 px-6 '>
				<h1
					onClick={() => handleScrollToTop()}
					className='text-3xl uppercase font-clash-display tracking-widest select-none cursor-pointer'>
					Velora
				</h1>
				<ul className='hidden lg:flex gap-10 items-center lg:text-base text-sm text-text'>
					<li className='hover:text-primary transition-colors duration-300'>
						<Link
							href='/'
							onClick={() => handleScrollToTop()}>
							Home
						</Link>
					</li>
					<li className='hover:text-primary transition-colors duration-300'>
						<Link href='/menu'>Menu</Link>
					</li>
					<li className='hover:text-primary transition-colors duration-300'>
						<Link
							href='/#gallery'
							onClick={
								pathname === '/menu'
									? () => {}
									: (e) => handleScrollToSection({ e, id: 'gallery' })
							}>
							Gallery
						</Link>
					</li>
					<li className='hover:text-primary transition-colors duration-300'>
						<Link
							href='/#about'
							onClick={
								pathname === '/menu'
									? () => {}
									: (e) => handleScrollToSection({ e, id: 'about' })
							}>
							About
						</Link>
					</li>
					<li className='hover:text-primary transition-colors duration-300'>
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
				</ul>
				<div className='hidden lg:block'>
					<PrimaryButton />
				</div>
				<div className='lg:hidden'>
					<Menu onClick={() => setIsNavOpen(true)} />
				</div>
			</nav>
		</header>
	);
};

export default Nav;
