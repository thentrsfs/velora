'use client';

import { useUiStore } from '@/app/store/ui';

import Hero from '@/app/components/sections/Home/Hero';
import Menu from '@/app/components/sections/Home/Menu';
import About from '@/app/components/sections/Home/About';
import Contact from '@/app/components/sections/Home/Contact';
import SplashScreen from '@/app/components/ui/SplashScreen';

export default function Home() {
	const splashScreen = useUiStore((state) => state.splashScreen);

	return (
		<>
			{splashScreen && <SplashScreen />}
			<main>
				<Hero />
				<Menu />
				<About />
				<Contact />
			</main>
		</>
	);
}
