'use client';

import Nav from '@/app/components/ui/Nav';
import Hero from '@/app/components/sections/Hero';
import Menu from '@/app/components/sections/Menu';

export default function Home() {
	return (
		<>
			<Nav />
			<main>
				<Hero />
				<Menu />
			</main>
		</>
	);
}
