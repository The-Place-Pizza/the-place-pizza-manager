import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/AuthContext';
import { createBrowserRouter, RouterProvider as Router, Routes } from 'react-router-dom';
import Root from './components/Root';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element:
      <Root />,
    children: [
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      }
    ]
  },
]);

function App() {
  return (
    <AuthProvider>
      <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
        <div className='w-100' style={{ maxWidth: '400px' }}>
          <Router router={router} />
        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;
