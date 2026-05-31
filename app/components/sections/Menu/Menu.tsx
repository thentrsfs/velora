'use client';

import { menuCategories } from '@/app/data/menu';

const Menu = () => {
	return (
		<section
			id='full-menu'
			className='min-h-dvh'>
			<div className='mx-auto w-full max-w-7xl px-6 py-20 mt-10'>
				<h1 className='text-5xl tracking-wider font-clash-display'>Our Menu</h1>
				<div className='flex flex-col gap-18'>
					{menuCategories.map((category) => (
						<div key={category.id}>
							<h2 className='pt-20 font-bold text-primary tracking-[0.3em] uppercase pb-2 '>
								{category.title}
							</h2>
							<div className='mt-8 grid md:grid-cols-2 gap-10'>
								{category.items.map((item) => (
									<div
										key={item.id}
										className='p-6 border-b border-primary/50 lg:max-w-lg group'>
										<div className='flex justify-between items-center text-text mb-1'>
											<h3 className='font-bold text-lg group-hover:text-primary transition-colors duration-300'>
												{item.name}
											</h3>
											<p className='font-medium text-primary'>{item.price}</p>
										</div>
										<p className='text-sm text-text/80'>{item.description}</p>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Menu;
