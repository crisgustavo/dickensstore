import { createBrowserRouter } from 'react-router-dom';
import { Landing } from '../pages';
import { Layout } from '../styles/layout';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
    ],
  },
]);
