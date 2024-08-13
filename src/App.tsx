import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layouts/Layout';
import NotFound from './components/NotFound';
import FlowDiagrams from './pages/FlowDiagrams';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/diagram',
        element: <FlowDiagrams />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}
export default App;
