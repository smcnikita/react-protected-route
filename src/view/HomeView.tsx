import { Link } from 'react-router-dom';
import { PATHS } from '../constants/router';

const HomeView = () => {
  return (
    <>
      <h1>Home</h1>
      <div>
        <Link to={PATHS.dashboard}>dashboard</Link>
      </div>
    </>
  );
};

export default HomeView;
