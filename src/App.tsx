import { BrowserRouter } from 'react-router';
import { RoutesDefinitions } from './routes';

function App() {
  return (
    <main>
      <BrowserRouter>
        <RoutesDefinitions />
      </BrowserRouter>
    </main>
  );
}

export default App;
