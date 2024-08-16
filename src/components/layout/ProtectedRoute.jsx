import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth);
  const { pathname } = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ pathname }} replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
