import { BrowserRouter } from 'react-router';
import { RoutesDefinitions } from './routes';
import { Navbar } from '@/components/Navbar';
import { MainDrawer } from '@/components/MainDrawer';
import { useThemeService } from '@/services/ThemeService.ts';

function App() {
  useThemeService();

  return (
    <main>
      <Navbar />
      <BrowserRouter>
        <MainDrawer>
          <RoutesDefinitions />
        </MainDrawer>
      </BrowserRouter>
    </main>
  );
}

export default App;
