import { ContainerCard } from '@/components/ui/ContainerCard';
import { useSettingsStore } from '@/store/settingsStore.ts';

export function SettingsPage() {
  const { theme, setTheme } = useSettingsStore();

  return (
    <main>
      <ContainerCard title='Settings'>
        <label className='label'>Theme</label>
        <select className='select w-full' value={theme} onChange={e => setTheme(e.target.value)}>
          <option disabled selected value=''>
            Select theme
          </option>
          <option value='light'>Light</option>
          <option value='drak'>Dark</option>
          <option value='dracula'>Dracula</option>
          <option value='cupcake'>Cupcake</option>
          <option value='garden'>Garden</option>
          <option value='forest'>Forest</option>
          <option value='nord'>Nord</option>
          <option value='retro'>Retro</option>
          <option value='coffee'>Coffee</option>
        </select>
      </ContainerCard>
    </main>
  );
}
