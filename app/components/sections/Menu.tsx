import Image from 'next/image';

import SecondaryBtn from '@/app/components/ui/SecondaryBtn';

const Menu = () => {
	return (
		<section className='relative h-dvh py-32 flex items-center'>
			<div className='mx-auto w-full max-w-7xl px-6 grid grid-cols-2 items-center'>
				<div className='max-w-lg'>
					<p className='mb-4 text-sm tracking-[0.3em] text-primary uppercase'>
						Signature Menu
					</p>

					<h2 className='font-display text-6xl leading-none text-text'>
						Crafted With
						<br />
						Precision & Warmth
					</h2>

					<p className='mt-8 max-w-sm text-lg text-text-muted'>
						Every drink at Velora is prepared with carefully selected beans and
						intentional technique.
					</p>
					<div className='mt-8'>
						<SecondaryBtn>View Full Menu →</SecondaryBtn>
					</div>
				</div>

				<div className='grid grid-cols-2 gap-5'>
					<div
						className='col-span-2 group overflow-hidden rounded-4xl border border-white/5 bg-white/3 backdrop-blur-xl hover:-translate-y-1
transition-all duration-500 ease-out'>
						<div className='relative h-75 overflow-hidden'>
							<Image
								src='/images/black-coffee.jpg'
								alt='Menu 1'
								fill
								className='object-cover transition-transform duration-700 group-hover:scale-105 ease-out'
							/>
						</div>
						<div className='p-6 flex items-center justify-between'>
							<div>
								<h3 className='text-xl text-text font-clash-display tracking-wide'>
									Midnight Roast
								</h3>

								<p className='mt-2 text-sm text-text-muted'>
									Rich dark roast with deep chocolate notes.
								</p>
							</div>

							<p className='text-sm tracking-wide text-primary'>€ 8.99</p>
						</div>
					</div>

					<div
						className='group overflow-hidden rounded-3xl border border-white/5 bg-white/3 backdrop-blur-xl hover:-translate-y-1
transition-all duration-500 ease-out'>
						<div className='relative h-50 overflow-hidden '>
							<Image
								src='/images/cappuccino-2.jpg'
								alt='Menu 2'
								fill
								className='object-cover transition-transform duration-700 group-hover:scale-105 ease-out'
							/>
						</div>
						<div className='p-6 '>
							<div className='flex items-center justify-between'>
								<h3 className='text-xl text-text font-clash-display tracking-wide'>
									Velvet Latte
								</h3>
								<p className=' text-primary text-sm tracking-wide'>€ 6.99</p>
							</div>
							<p className='mt-2 text-sm text-text-muted'>
								Smooth espresso with velvety milk foam.
							</p>
						</div>
					</div>
					<div
						className='group overflow-hidden rounded-3xl border border-white/5 bg-white/3 backdrop-blur-xl hover:-translate-y-1
transition-all duration-500 ease-out'>
						<div className='relative h-50 overflow-hidden '>
							<Image
								src='/images/esspresso-2.jpg'
								alt='Menu 2'
								fill
								className='object-cover transition-transform duration-700 group-hover:scale-105 ease-out'
							/>
						</div>
						<div className='p-6 '>
							<div className='flex items-center justify-between'>
								<h3 className='text-xl text-text font-clash-display tracking-wide'>
									Espresso Noir
								</h3>
								<p className=' text-primary text-sm tracking-wide'>€ 4.99</p>
							</div>
							<p className='mt-2 text-sm text-text-muted'>
								Bold espresso with a smooth finish.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Menu;
