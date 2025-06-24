import { Route, Routes } from 'react-router';
import { NotFoundPage } from '@/pages/NotFoundPage.tsx';
import { IndexPage } from '@/pages/Index.tsx';
import { SettingsPage } from '@/pages/Settings';

export function RoutesDefinitions() {
  return (
    <Routes>
      <Route path='/' element={<IndexPage />} />

      <Route path='/settings' element={<SettingsPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}
