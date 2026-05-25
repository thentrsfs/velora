import PrimaryBtn from '@/app/components/ui/PrimaryBtn';
import SecondaryBtn from '@/app/components/ui/SecondaryBtn';

const Hero = () => {
	return (
		<section
			id='hero'
			className='relative h-dvh overflow-hidden'>
			<video
				autoPlay
				muted
				loop
				playsInline
				className='absolute inset-0 w-full object-cover '>
				<source
					src='/videos/hero-video.mp4'
					type='video/mp4'
				/>
			</video>
			<div className='absolute inset-0 bg-bg/70' />

			<div className='relative z-10 flex h-full items-center'>
				<div className='mx-auto w-full max-w-7xl px-6'>
					<div className='max-w-140'>
						<p className='mb-4 text-sm tracking-[0.3em] text-primary uppercase'>
							Velora Café
						</p>

						<h1 className='font-clash-display text-7xl tracking-[0.02em] text-text'>
							Crafted Moments,
							<br />
							Poured Daily.
						</h1>

						<p className='mt-6 max-w-md text-lg text-text-muted'>
							Experience specialty coffee and a warm, intentional atmosphere in
							every cup.
						</p>

						<div className='mt-10 flex gap-4'>
							<PrimaryBtn />
							<SecondaryBtn>Explore Menu →</SecondaryBtn>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
