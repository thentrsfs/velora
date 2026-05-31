import Link from 'next/link';

const PrimaryBtn = () => {
	return (
		<Link
			href='/#contact'
			className='rounded-full border border-primary text-text py-2 px-5 text-sm md:text-base hover:bg-primary hover:text-bg transition-all duration-300 cursor-pointer'>
			Reserve table
		</Link>
	);
};

export default PrimaryBtn;
