'use client';

import { useUiStore } from '@/app/store/ui';

const MobileNavOverlay = () => {
	const isNavOpen = useUiStore((state) => state.isNavOpen);
	return (
		<div
			className={`bg-bg/80 backdrop-blur fixed inset-0 z-49 transition-opacity duration-300 ${isNavOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}></div>
	);
};

export default MobileNavOverlay;
