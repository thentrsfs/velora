'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface GalleryItem {
	id: number | string;
	src: string;
	alt: string;
}

const galleryImages: GalleryItem[] = [
	{
		id: 1,
		src: '/images/gallery/ambient-1.jpg',
		alt: 'Cafe ambient',
	},
	{
		id: 2,
		src: '/images/gallery/ambient-2.jpg',
		alt: 'Cafe ambient 2',
	},
	{
		id: 3,
		src: '/images/gallery/ice-kafe.jpg',
		alt: 'Ice coffee',
	},
	{
		id: 4,
		src: '/images/gallery/latte-gallery.jpg',
		alt: 'Latte art',
	},
	{
		id: 5,
		src: '/images/gallery/kroasan.jpg',
		alt: 'Croissant',
	},
	{
		id: 6,
		src: '/images/gallery/barista.jpg',
		alt: 'Barista preparing coffee',
	},
];

const Gallery = () => {
	const carouselRef = useRef<HTMLDivElement>(null);
	const [width, setWidth] = useState(0);

	// Računamo tačnu širinu zaustavljanja da nam galerija ne pobegne u beskrajno sivilo
	useEffect(() => {
		if (carouselRef.current) {
			setWidth(
				carouselRef.current.scrollWidth - carouselRef.current.offsetWidth,
			);
		}
	}, []);
	return (
		<section
			className='lg:min-h-dvh h-full py-20 lg:py-32 overflow-hidden max-w-7xl mx-auto px-6 flex flex-col justify-center'
			id='gallery'>
			<div className=' grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'>
				<div className='lg:col-span-5 lg:max-w-lg md:max-w-md max-w-xs w-full select-none'>
					<p className='mb-4 text-sm tracking-[0.3em] text-primary uppercase about-label'>
						GALLERY VELORA
					</p>
					<h2 className='font-display lg:text-6xl md:text-5xl text-4xl leading-none text-text about-title'>
						Captured
						<br />
						Atmosphere.
					</h2>
					<div className='about-text'>
						<p className='mt-8 max-w-sm text-lg text-text-muted'>
							Enjoy a visual journey through our cafe&apos;s ambiance, crafted
							beverages, and delectable treats. Each photo captures the essence
							of Velora, inviting you to experience our unique atmosphere before
							you even step inside.
						</p>
						<span className='block mt-8 text-sm md:text-base text-text-muted/70'>
							© 2026 Velora Cafe
						</span>
					</div>
				</div>

				<div className='lg:col-span-7 w-full'>
					<div
						ref={carouselRef}
						className='cursor-grab active:cursor-grabbing overflow-hidden w-full pb-4'>
						<motion.div
							drag='x'
							dragConstraints={{ right: 0, left: -width }}
							dragElastic={0.1}
							dragTransition={{ bounceStiffness: 600, bounceDamping: 40 }} // Kontroliše finoću zaustavljanja
							className='flex gap-4 w-full'>
							{galleryImages.map((image) => (
								<div
									key={image.id}
									className='
                    relative shrink-0 rounded-3xl overflow-hidden group select-none
                    w-65 h-85
                    md:w-75 md:h-100
                    lg:w-[320px] lg:h-110
                  '>
									<Image
										src={image.src}
										alt={image.alt}
										fill
										sizes='(max-width: 768px) 100vw, 50vw'
										loading='lazy'
										draggable='false'
										className='object-cover transform duration-700 ease-out group-hover:scale-105 pointer-events-none'
									/>

									<div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6'>
										<p className='text-white text-xs font-medium tracking-wider uppercase'>
											{image.alt}
										</p>
									</div>
								</div>
							))}
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Gallery;
