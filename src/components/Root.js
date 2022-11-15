import { Outlet } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';

export default function Root() {
    return (
        <>
            <div id='detail'>
                <AuthProvider>
                    <Outlet />
                </AuthProvider>
            </div>
        </>
    )
}