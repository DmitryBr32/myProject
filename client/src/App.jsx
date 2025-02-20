import React, { useEffect, useState } from 'react';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './components/pages/ErrorPage';
import MainPage from './components/pages/MainPage';
import Layout from './Layout';
import SignInPage from './components/pages/SignInPage';
import MoodboardPage from './components/pages/MoodboardPage';
//import axios from 'axios';
import axiosInstance, { setAccessToken } from './utils/axiosInstanse';
console.log("axiosInstance:", axiosInstance.defaults)
// import LoginPage from './components/pages/LoginPage';

//const { VITE_FETCH } = import.meta.env;

function App() {

  //const [inputs, setInputs] = useState({ title: "", text: "" });
  //const [entries, setEntries] = useState([]);

  const [userLogin, setUserLogin] = useState('');
  const [userId, setUserId] = useState('');
  const [user, setUser] = useState(null);



  useEffect(() => {
    (async function () {
      console.log('Отправляем запрос на /tokens/refresh');
      const { data } = await axiosInstance.get('/tokens/refresh', { withCredentials: true });
      if (data) {
        setUserLogin(data.user.login);
        setUserId(data.user.id);
        setUser(data.user);
        console.log('app', user)
        console.log('app1', userLogin)
        setAccessToken(data.accessToken);
      } else {
        console.warn('Refresh token недействителен или отсутствует ответ.');
        setUserLogin(null);
      }
    })();
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout user={userLogin} setUser={setUserLogin}/>,
      errorElement: <ErrorPage />,
      children: [
     
        {
          path: '/',
          element: <MainPage />,
        },
        {
          path: '/moodboard',
          element: <MoodboardPage user={[userLogin, userId]} />,
        },
        {
          path: '/registration',
          element: <SignInPage prop="registration" setUser={setUserLogin} />,
        },
        {
          path: '/login',
          element: <SignInPage prop="login" setUser={setUserLogin} />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
