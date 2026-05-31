'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { X } from 'lucide-react';
import { usePathname } from 'next/navigation';

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
			className={`fixed inset-0 flex items-center justify-center bg-bg backdrop-blur-sm lg:hidden transition-opacity ${isNavOpen ? 'opacity-100 z-50' : 'opacity-0'}`}>
			<button
				className='absolute top-6 right-6  text-sm lg:text-base hover:bg-primary hover:text-bg transition-all duration-300 cursor-pointer'
				onClick={() => setIsNavOpen(!isNavOpen)}>
				<X />
			</button>

			<ul className='flex flex-col gap-10 text-xl text-text items-center'>
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
						href='#about'
						onClick={(e) => handleScrollToSection({ e, id: 'about' })}>
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
			</ul>
		</div>
	);
};

export default NavMobile;
