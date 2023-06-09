import { Navigate, createBrowserRouter } from 'react-router-dom';
import Layouts from '../Layouts/Layouts';
import Home from '../Home/';
import Community from '../Community';
import Healing from '../Healing';
import Festival from '../Festival';

const RouterNav = createBrowserRouter([
  {
    path: '/',
    element: <Layouts />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/community',
        element: <Community />
      },
      {
        path: '/healing',
        element: <Healing />
      },
      {
        path: '/festival',
        element: <Festival />
      },
      {
        path: '*',
        element: <Navigate to="/" />
      }
    ]
  }
]);

export default RouterNav;
