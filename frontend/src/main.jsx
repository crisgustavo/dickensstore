import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyles from './styles/globalStyles';
import { ToastContainer, Bounce } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import AppProvider from './hooks';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={routes} />

      <GlobalStyles />

      <ToastContainer
        position='top-center'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme='dark'
        transition={Bounce}
      />
    </AppProvider>
  </StrictMode>,
);
