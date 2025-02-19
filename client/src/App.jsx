import React, { useEffect, useState } from 'react';

import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
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

  const [user, setUser] = useState('')

  // useEffect(() => {
  //   (async function() {
  //     console.log("Отправляем запрос на /tokens/refresh");
  //     const { data } = await axiosInstance.get('/tokens/refresh', { withCredentials: true })
  //     if (data && data.user) {
  //       setUser(data.user.login)
  //       setAccessToken(data.accessToken)
  //     } else {
  //       console.warn("Refresh token недействителен или отсутствует ответ.")
  //       setUser(null);
  //     }
  //   })()
  // }, [])

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout user={user} setUser={setUser}/>,
      errorElement: <ErrorPage />,
      children: [
     
        {
          path: '/',
          element: <MainPage />,
        },
        {
          path: '/moodboard',
          element: <MoodboardPage />,
        },
        {
          path: '/registration',
          element: <SignInPage prop="registration" setUser={setUser} />,
        },
        {
          path: '/login',
          element: <SignInPage prop="login" setUser={setUser} />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
