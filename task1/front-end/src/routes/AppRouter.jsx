import React, { useContext, Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Private route
import PrivateRoute from 'routes/PrivateRoute';

// Context
import { CurrentUserContext } from 'context/AppProvider';

// Components
import { Sidebar } from 'components/Sidebar/Sidebar';
import Loader from 'components/common/Loader/Loader';

// Pages
const Login = lazy(() => import('pages/Login'));
const Events = lazy(() => import('pages/Events/Events'));
const Dashboard = lazy(() => import('pages/Dashboard/Dashboard'));
const NotFound = lazy(() => import('pages/NotFound'));

const RouterWrapper = () => {
  const { isAuthenticated } = useContext(CurrentUserContext);
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route index element={isAuthenticated ? <Navigate to='/app/dashboard' /> : <Login />} />
        <Route
          path='/app'
          element={
            <PrivateRoute>
              <Sidebar />
            </PrivateRoute>
          }
        >
          <Route
            path='/app/events'
            element={
              <PrivateRoute>
                <Events />
              </PrivateRoute>
            }
          />
          <Route
            path='/app/dashboard'
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default RouterWrapper;
