import './App.css';
import Signup from './components/Signup';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/AuthContext';
import { createBrowserRouter, RouterProvider as Router, Route } from 'react-router-dom';
import Root from './components/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'signup',
        element: <Signup />,
      }
    ]
  },
]);

function App() {
  return (
    <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
      <div className='w-100' style={{ maxWidth: '400px' }}>
        <Router router={router} />
      </div>
    </Container>
  );
}

export default App;
