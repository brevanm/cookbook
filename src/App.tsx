import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Root from './pages/Root';
import Error from './pages/Error';
import Recipe from './pages/Recipe';
import Create from './pages/Create';
import { GoogleOAuthProvider } from '@react-oauth/google';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/recipe/:id',
        element: <Recipe />
      },
      {
        path: '/create',
        element: <Create />
      }
    ]
  },
  {
    path: '*',
    element: <Error />
  }
]);

function App() {
  return (
    <GoogleOAuthProvider clientId="817265379484-0lsuj8ht7k0kifaij45m76up2pckieq3.apps.googleusercontent.com">
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  );
}

export default App;
