import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

import Nav from '@/app/components/ui/Nav';
import NavMobile from '@/app/components/ui/NavMobile';

const clashDisplay = localFont({
	src: '../public/fonts/ClashDisplay-Variable.woff2',
	variable: '--font-clash-display',
	display: 'swap',
});

const satoshi = localFont({
	src: '../public/fonts/Satoshi-Variable.woff2',
	variable: '--font-satoshi',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Velora',
	description: 'Coffee Shop',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className={`${clashDisplay.variable} ${satoshi.variable} h-full antialiased`}>
			<body className='min-h-full flex flex-col'>
				<Nav />
				<NavMobile />
				{children}
			</body>
		</html>
	);
}
