import React from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import './index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
    
          <App />
 
        </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
