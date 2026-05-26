'use client';

import Hero from '@/app/components/sections/Hero';
import Menu from '@/app/components/sections/Menu';
import About from '@/app/components/sections/About';

export default function Home() {
	return (
		<>
			<main>
				<Hero />
				<Menu />
				<About />
			</main>
		</>
	);
}
