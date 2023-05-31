import { useEffect, useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import api from '../utils/api';

const Login = () => {
  const [user, setUser] = useState<any>();
  const [_profile, setProfile] = useState();

  const login = useGoogleLogin({
    onSuccess: (user) => {
      setUser(user);
    }
  });

  useEffect(() => {
    if (user) {
      api
        .getProfile(user.accessToken)
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <div>
      <h1>Login</h1>
      <button
        onClick={(_e) => {
          login();
        }}>
        Login
      </button>
    </div>
  );
};

export default Login;
