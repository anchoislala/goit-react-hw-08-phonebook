import { Navigate } from "react-router-dom";
import { useAuth } from "hooks";

export default function PublicRoute({ component: Component, restricted = false, redirectTo = '/' }) {
    const { isLoggedIn } = useAuth();
    const shouldRedirect = isLoggedIn && restricted;

    return shouldRedirect ? <Navigate to={redirectTo} /> : Component; 
};