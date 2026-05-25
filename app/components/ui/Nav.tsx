'use client';

import Link from 'next/link';

import PrimaryButton from '@/app/components/ui/PrimaryBtn';

const Nav = () => {
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

	return (
		<header className='fixed top-0 left-0 w-full z-50 bg-transparent'>
			<nav className='flex items-center justify-between mx-auto max-w-7xl py-4 px-6 '>
				<h1 className='text-3xl uppercase font-clash-display tracking-widest select-none cursor-pointer'>
					Velora
				</h1>
				<ul className='hidden lg:flex gap-10 items-center lg:text-base text-sm text-text/80'>
					<li className='hover:text-text transition-colors duration-300'>
						<Link href='/'>Home</Link>
					</li>
					<li className='hover:text-text transition-colors duration-300'>
						<Link
							href='#menu'
							onClick={(e) => handleScrollToSection({ e, id: 'menu' })}>
							Menu
						</Link>
					</li>
					<li className='hover:text-text transition-colors duration-300'>
						<Link
							href='#about'
							onClick={(e) => handleScrollToSection({ e, id: 'about' })}>
							About
						</Link>
					</li>
					<li className='hover:text-text transition-colors duration-300'>
						<Link
							href='#contact'
							onClick={(e) => handleScrollToSection({ e, id: 'contact' })}>
							Contact
						</Link>
					</li>
				</ul>
				<PrimaryButton />
			</nav>
		</header>
	);
};

export default Nav;
