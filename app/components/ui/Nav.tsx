'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { useUiStore } from '@/app/store/ui';

import PrimaryButton from '@/app/components/ui/PrimaryBtn';

const Nav = () => {
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
			if (window.scrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	return (
		<header
			className={`fixed top-0 left-0 w-full z-50 bg-transparent transition-transform duration-300 ${isScrolled ? 'bg-bg/80 backdrop-blur-xl border-b border-white/5' : ''}`}>
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
						<Link
							href='#menu'
							onClick={(e) => handleScrollToSection({ e, id: 'menu' })}>
							Menu
						</Link>
					</li>
					<li className='hover:text-primary transition-colors duration-300'>
						<Link
							href='#about'
							onClick={(e) => handleScrollToSection({ e, id: 'about' })}>
							About
						</Link>
					</li>
					<li className='hover:text-primary transition-colors duration-300'>
						<Link
							href='#contact'
							onClick={(e) => handleScrollToSection({ e, id: 'contact' })}>
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
