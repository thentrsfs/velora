const Footer = () => {
	return (
		<footer className='absolute bottom-0 left-0 w-full text-sm text-text-muted border-t border-white/10'>
			<div className='flex max-sm:flex-col max-sm:gap-8 items-center justify-between p-6 max-w-7xl mx-auto'>
				<p className='text-sm text-text-muted'>
					&copy; {new Date().getFullYear()} Velora. All rights reserved.
				</p>

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

				<a
					href='https://www.filipstojkov.com'
					target='_blank'
					rel='noopener noreferrer'
					className='text-sm group text-text-muted '>
					Designed & Developed by
					<span className='group-hover:text-primary transition-colors duration-300'>
						{' '}
						Filip Stojkov
					</span>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
