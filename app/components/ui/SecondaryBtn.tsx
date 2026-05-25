const SecondaryBtn = ({ children }: { children: React.ReactNode }) => {
	return (
		<button className='text-text/80 hover:text-text transition-colors duration-300 cursor-pointer'>
			{children}
		</button>
	);
};

export default SecondaryBtn;
