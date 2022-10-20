import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../page/hooks/useAuth';

const Protected = ({ children }) => {
    const { auth } = useAuth();
    const location = useLocation();
    return auth ? (
        children
    ) : (
        <Navigate to="/login" state={{ path: location.pathname }} replace />
    );
};
export default Protected
