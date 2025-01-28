<<<<<<< HEAD
import { ROUTES } from '@/constants/routes';
import { useAuth } from '@/features/auth/hooks/useAuth';
import useAuthenticationStore from '@/store/useAuthenticationStore';
import { Navigate, Outlet } from 'react-router-dom';

export const RedirectAuthenticatedUser = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={ROUTES.DASHBOARD} replace />;
  }

  return <Outlet />;
};
=======
import { ROUTES } from "@/constants/routes";
import useAuthenticationStore from "@/store/useAuthenticationStore"
import { Navigate, Outlet } from "react-router-dom";

export const RedirectAuthenticatedUser = () => {
    const { isAuthenticated } = useAuthenticationStore();

    if (isAuthenticated) {
        <Navigate path={ROUTES.DASHBOARD} />
    }

    return <Outlet />
}
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
