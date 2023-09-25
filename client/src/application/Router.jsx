import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';
import RegisterPage from '../pages/register/RegisterPage';
import CreateForm from '../components/admin/CreateForm';
import EditForm from '../components/admin/EditForm';
import LoginPage from '../pages/login/LoginPage'
import Dashboard from '../pages/admin/Dashboard';
import DashboardEvents from '../pages/admin/DashboardEvents';
import MatchCard from '../components/matchCard/MatchCard';
import AdminLoginPage from '../pages/admin/AdminLoginPage';

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <HomePage />
   },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/matches',
    element: <MatchCard />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/dashboard/create',
    element: <CreateForm />
  },
  {
    path: '/dashboard/edit/:eventId',
    element: <EditForm />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },

  {
    path: '/dashboard/events',
    element: <DashboardEvents />
  },
  {
    path: '/admin-login',
    element: <AdminLoginPage />
  }
 
])

export default router;
