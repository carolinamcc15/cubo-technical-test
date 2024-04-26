import { Toaster } from 'react-hot-toast';
import { FavoritesProvider } from './context/FavoritesContext/FavoritesContext';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <>
      <FavoritesProvider>
        <AppRouter />
        <Toaster />
      </FavoritesProvider>
    </>
  );
}

export default App;
