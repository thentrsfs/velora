import Form from '@/app/components/ui/Form';
import Footer from '@/app/components/ui/Footer';

const Contact = () => {
	return (
		<section
			id='contact'
			className='min-h-screen px-6 relative lg:py-32 pt-20 pb-60 flex items-center'>
			<div className='grid lg:grid-cols-2 items-center max-md:gap-10 w-full lg:max-w-7xl mx-auto '>
				<div className='lg:max-w-lg max-w-xs'>
					<p className='mb-4 text-sm tracking-[0.3em] text-primary uppercase'>
						Get in touch
					</p>

					<h2 className='font-display lg:text-6xl text-4xl leading-none text-text'>
						Visit Velora
					</h2>

					<p className='mt-8 max-w-sm text-lg text-text-muted'>
						Crafted coffee, warm atmosphere, and intentional moments — served
						daily in the heart of the city.
					</p>
					<div className='mt-12 space-y-8 text-text-muted'>
						<div>
							<p className='text-sm uppercase tracking-[0.25em] text-white/40'>
								Location
							</p>

							<p className='mt-2 text-lg text-text'>Prague, Czech Republic</p>
						</div>

						<div>
							<p className='text-sm uppercase tracking-[0.25em] text-text/40'>
								Opening Hours
							</p>

							<div className='mt-2 space-y-1 text-lg text-text'>
								<p>Mon — Fri: 8am — 8pm</p>
								<p>Sat — Sun: 9am — 10pm</p>
							</div>
						</div>
					</div>
				</div>
				<div>
					<Form />
				</div>
			</div>
			<Footer />
		</section>
	);
};

export default Contact;
