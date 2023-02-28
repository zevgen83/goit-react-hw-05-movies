import { Navigate } from 'react-router-dom';
import { PAGE_NAMES } from 'router/paths';

const NotFound = () => {
  return (
    <div>
      <Navigate to={PAGE_NAMES.homepage} />
    </div>
  );
};

export default NotFound;
