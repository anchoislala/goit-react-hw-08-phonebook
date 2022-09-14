import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Layout } from "components/Layout";
import { authOperations } from "redux/auth";
import PublicRoute from "components/PublicRoute";
import PrivateRoute from "components/PrivateRoute";
import { useAuth } from "hooks";

const Home = lazy(() => import('./pages/Home'));
const RegisterForm = lazy(() => import('./pages/RegisterForm'));
const LoginForm = lazy(() => import('./pages/LoginForm'));
const Contacts = lazy(() => import('./pages/Contacts'));

export default function App() {

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth;

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <h1>Refreshing User...</h1>
  ) : (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<PublicRoute component={<Home />} />} />
        <Route path="/register"
          element={
            <PublicRoute restricted redirectTo="/contacts" component={<RegisterForm />} />
          }
        />
        <Route path="/login"
          element={
            <PublicRoute restricted redirectTo="/contacts" component={<LoginForm />} />
          }
        />
        <Route path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );
};