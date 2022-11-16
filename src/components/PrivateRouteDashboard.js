import React from "react";
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Dashboard from "./Dashboard";

export default function PrivateRoute({ props: Component, ...rest }) {
    const { currentUser } = useAuth();

    return currentUser ? <Dashboard /> : <Navigate to='/login' />
}