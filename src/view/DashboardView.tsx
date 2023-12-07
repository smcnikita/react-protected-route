import { Link } from 'react-router-dom';
import { PATHS } from '../constants/router';

const DashboardView = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <div>
        <Link to={PATHS.home}>home</Link>
      </div>
    </>
  );
};

export default DashboardView;
