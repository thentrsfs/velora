import Image from 'next/image';

const About = () => {
	return (
		<section
			id='about'
			className='lg:h-dvh h-full grid lg:grid-cols-2 items-center px-6 lg:max-w-7xl mx-auto relative max-md:gap-10 lg:py-32 py-20'>
			<div className='relative lg:h-160 h-90 overflow-hidden group rounded-4xl'>
				<Image
					src='/images/about-image-1.jpg'
					alt='Velora Cafe'
					fill
					sizes='(max-width: 768px) 100vw, 50vw'
					className='object-cover rounded-4xl group-hover:scale-102 transition-all duration-700 ease-out '
					loading='eager'
				/>
				<div className='absolute inset-0 bg-bg/20' />
			</div>

			<div className='lg:max-w-lg max-w-xs mx-auto'>
				<p className='mb-4 text-sm tracking-[0.3em] text-primary uppercase'>
					ABOUT VELORA
				</p>

				<h2 className='font-display lg:text-6xl text-4xl leading-none text-text'>
					Designed For
					<br />
					Slow Moments.
				</h2>

				<p className='mt-8 max-w-sm text-lg text-text-muted'>
					Velora blends modern café culture with warm, intentional design —
					creating a space where coffee, conversation, and atmosphere come
					together.
				</p>
				<span className='block mt-8 text-sm text-text-muted/70'>
					Since 2026
				</span>
			</div>
		</section>
	);
};

export default About;
