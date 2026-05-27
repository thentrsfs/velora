'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { X } from 'lucide-react';

import { useUiStore } from '@/app/store/ui';

const NavMobile = () => {
	const isNavOpen = useUiStore((state) => state.isNavOpen);
	const setIsNavOpen = useUiStore((state) => state.setIsNavOpen);

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
			className={`fixed inset-0 z-50 flex items-center justify-center bg-bg backdrop-blur-sm lg:hidden transition-opacity ${isNavOpen ? 'opacity-100' : 'opacity-0'}`}>
			<button
				className='absolute top-6 right-6  text-sm lg:text-base hover:bg-primary hover:text-bg transition-all duration-300 cursor-pointer'
				onClick={() => setIsNavOpen(!isNavOpen)}>
				<X />
			</button>

			<ul className='flex flex-col gap-10 text-xl text-text items-center'>
				<li>
					<Link
						href='/'
						onClick={closeNav}>
						Home
					</Link>
				</li>
				<li>
					<Link
						href='#menu'
						onClick={closeNav}>
						Menu
					</Link>
				</li>
				<li>
					<Link
						href='#about'
						onClick={closeNav}>
						About
					</Link>
				</li>
				<li>
					<Link
						href='#contact'
						onClick={closeNav}>
						Contact
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default NavMobile;
