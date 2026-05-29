import Link from 'next/link';

const SecondaryBtn = ({ children }: { children: React.ReactNode }) => {
	return (
		<button>
			<Link
				href='/menu'
				className='group inline-flex items-center gap-2 text-[15px] tracking-widest text-text/80 transition-colors duration-300 hover:text-primary cursor-pointer'>
				{children}
				<span className='transition-transform duration-300 group-hover:translate-x-1'>
					→
				</span>
			</Link>
		</button>
	);
};

export default SecondaryBtn;
