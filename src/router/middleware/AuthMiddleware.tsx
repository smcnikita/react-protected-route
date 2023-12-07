import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';
import { PATHS } from '../../constants/router';

interface Props {
  redirectPath?: string;
  isAuth: boolean;
  children: ReactNode;
}

const AuthMiddleware = ({ children, isAuth, redirectPath = PATHS.accessIsDenied }: Props) => {
  if (!isAuth) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default AuthMiddleware;
