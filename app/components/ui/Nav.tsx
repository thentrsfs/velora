import Link from 'next/link';

const Nav = () => {
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
						<Link href='/menu'>Menu</Link>
					</li>
					<li className='hover:text-text transition-colors duration-300'>
						<Link href='/about'>About</Link>
					</li>
					<li className='hover:text-text transition-colors duration-300'>
						<Link href='/contact'>Contact</Link>
					</li>
				</ul>
				<button className='rounded-full border border-primary py-2 px-5 text-sm lg:text-base hover:bg-primary hover:text-bg transition-all duration-300 cursor-pointer'>
					Reserve table
				</button>
			</nav>
		</header>
	);
};

export default Nav;
