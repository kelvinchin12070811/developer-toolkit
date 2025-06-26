import { useEffect } from 'react';
import { useSettingsStore } from '@/store/settingsStore.ts';

export function useThemeService() {
    const { theme } = useSettingsStore();

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);
}
