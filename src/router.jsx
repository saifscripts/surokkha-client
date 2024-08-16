import { createBrowserRouter } from 'react-router-dom';
import Dashboard from './components/layout/Dashboard';
import ProtectedRoute from './components/layout/ProtectedRoute';
import Login from './pages/Login';
import Redirect from './Redirect';
import { DashboardLayout, Settings, Vaccinees } from './routes/dashboard';
import VaccineCard from './routes/dashboard/vaccine-card/VaccineCard';
import { VerifyOnline } from './routes/verify-online';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Redirect />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/randadpan',
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Vaccinees /> },
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path: 'vaccine-card/:id',
        element: <VaccineCard />,
      },
    ],
  },
  {
    path: '/verify-online',
    element: <VerifyOnline />,
  },

  {
    path: '/admin-dashboard',
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Vaccinees /> },
      { path: '', element: <Vaccinees /> },
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path: 'vaccine-card/:id',
        element: <VaccineCard />,
      },
    ],
  },
]);

export default router;
