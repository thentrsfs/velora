import Link from 'next/link';

const SecondaryBtn = ({
	children,
	href,
}: {
	children: React.ReactNode;
	href: string;
}) => {
	return (
		<Link
			href={href}
			className='group inline-flex items-center gap-2 text-[13px] tracking-[0.2em] uppercase text-text transition-colors duration-300 hover:text-primary cursor-pointer'>
			{children}
			<span className='transition-transform duration-300 group-hover:translate-x-1'>
				→
			</span>
		</Link>
	);
};

export default SecondaryBtn;
