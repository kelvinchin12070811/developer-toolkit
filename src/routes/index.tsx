import { Route, Routes } from 'react-router';
import { NotFoundPage } from '@/pages/NotFoundPage.tsx';
import { IndexPage } from '@/pages/Index.tsx';
import { SettingsPage } from '@/pages/Settings';
import { UUIDGeneratorPage } from '@/pages/generators/uuid.tsx';
import { ULIDGeneratorPage } from '@/pages/generators/ulid.tsx';

export function RoutesDefinitions() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/generators/ulid" element={<ULIDGeneratorPage />} />
      <Route path="/generators/uuid" element={<UUIDGeneratorPage />} />

      <Route path="/settings" element={<SettingsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
