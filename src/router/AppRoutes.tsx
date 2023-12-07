import { Route, Routes } from 'react-router-dom';
import { PATHS } from '../constants/router';

import AuthMiddleware from './middleware/AuthMiddleware';

import HomeView from '../view/HomeView';
import DashboardView from '../view/DashboardView';
import ProtectedView from '../view/ProtectedView';

interface Props {
  isAuth: boolean;
}

const AppRoutes = ({ isAuth }: Props) => {
  return (
    <Routes>
      <Route path={PATHS.home} element={<HomeView />} />
      <Route
        path={PATHS.dashboard}
        element={
          <AuthMiddleware isAuth={isAuth}>
            <DashboardView />
          </AuthMiddleware>
        }
      />
      <Route path={PATHS.accessIsDenied} element={<ProtectedView />} />
    </Routes>
  );
};

export default AppRoutes;
