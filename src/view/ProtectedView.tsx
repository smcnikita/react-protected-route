import { Link } from 'react-router-dom';
import { PATHS } from '../constants/router';

const ProtectedView = () => {
  return (
    <>
      <h1>Access is denied</h1>
      <div>
        <Link to={PATHS.home}>Home page</Link>
      </div>
    </>
  );
};

export default ProtectedView;
