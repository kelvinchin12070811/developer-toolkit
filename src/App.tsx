import { BrowserRouter } from 'react-router';
import { RoutesDefinitions } from './routes';
import { Navbar } from '@/components/Navbar';
import { MainDrawer } from '@/components/MainDrawer';

function App() {
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
