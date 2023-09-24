import { Redirect, Route } from 'react-router-dom';
import { useProfile } from '../context/ProfileContext';

const PublicRoute = ({ children, ...routeProps }) => {
  const profile = useProfile();

  if (profile) {
    return <Redirect to="/" />;
  }

  return <Route {...routeProps}>{children}</Route>;
};

export default PublicRoute;
