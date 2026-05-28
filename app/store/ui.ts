'use client';

import { create } from 'zustand';

interface UiStoreState {
    isNavOpen: boolean;
    setIsNavOpen: (open: boolean) => void;

    splashScreen: boolean;
    setSplashScreen: (open: boolean) => void;
}

export const useUiStore = create<UiStoreState>((set) => ({
    isNavOpen: false,
    setIsNavOpen: (open) => set({ isNavOpen: open }),
    splashScreen: true,
    setSplashScreen: (open) => set({ splashScreen: open }),
}));