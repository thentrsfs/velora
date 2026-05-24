const Menu = () => {
	return (
		<section className='relative min-h-dvh py-32 flex items-center'>
			<div className='mx-auto w-full max-w-7xl px-6'>
				<div>
					<p className='mb-4 text-sm tracking-[0.3em] text-primary uppercase'>
						Signature Menu
					</p>

					<h2 className='font-display text-6xl leading-none text-white'>
						Crafted With
						<br />
						Precision & Warmth
					</h2>

					<p className='mt-8 max-w-md text-lg text-text-muted'>
						Every drink at Velora is prepared with carefully selected beans and
						intentional technique.
					</p>

					<button className='mt-10'>View Full Menu →</button>
				</div>

				<div></div>
			</div>
		</section>
	);
};

export default Menu;
