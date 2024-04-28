import { Toaster } from 'react-hot-toast';
import { FavoritesProvider } from './context/FavoritesContext/FavoritesContext';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <>
      <FavoritesProvider>
        <AppRouter />
        <Toaster
          toastOptions={{
            
            style: {
              borderRadius: '8px',
              background: '#333333dc',
              color: '#fff',
            },
          }}
        />
      </FavoritesProvider>
    </>
  );
}

export default App;
