import { create } from 'zustand';
import type { SettingsStore } from '@/types/SettingsStore.ts';
import { createJSONStorage, persist } from 'zustand/middleware';

const defaultTheme = '';

export const useSettingsStore = create<SettingsStore>()(
    persist(
        set => ({
            theme: defaultTheme,
            setTheme: (theme: string) => set({ theme }),
        }),
        {
            name: 'settings', // Unique name for the storage
            storage: createJSONStorage(() => localStorage), // Use localStorage for persistence
        }
    )
);
