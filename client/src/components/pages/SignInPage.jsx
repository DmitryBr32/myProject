import { Flex, Text, Box, Button, Center, Heading, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axiosInstance, { setAccessToken } from '../../utils/axiosInstanse';

const initValue = {
  email: '',
  login: '',
  password: '',
};

export default function SignInPage({ prop, setUser }) {
  const navigate = useNavigate();
  const [authInputs, setAuthInputs] = useState(initValue);
  const [err, setErr] = useState('');

  const changeHandler = (event) => {
    setAuthInputs((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  //console.log("authInputs:", authInputs)

  async function submitHandler(event) {
    console.log('отработал');
    event.preventDefault();
    try {
      const res = await axiosInstance.post(`/auth/${prop}`, authInputs, { withCredentials: true });
      console.log('res:', res, prop);
      setAuthInputs(initValue);
      setAccessToken(res.data.accessToken);
      setUser(res.data.user);
      setErr('');
      navigate('/moodboard');
    } catch (error) {
      console.log(error, 'что-то здесь не так');
      setErr(error.response.data.message);
    }
  }

  return (
    <Center>
      <Box h="500px" w="400px" rounded="50" marginTop="10">
        <Flex flexDir="column" justifyContent="space-between" alignItems="center" style={{ height: '100%' }}>
          <Heading textColor="#1D0F0F" style={{ fontFamily: 'MuseoModerno', fontSize: '85px' }}>
            {prop === 'login' ? 'Wellcome' : 'Registration'}
          </Heading>

          <form onSubmit={submitHandler}>
            <Flex style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column' }}>
              <Flex w={'400px'} style={{ fontFamily: 'Roboto Condensed', fontSize: '20px', justifyContent: 'space-around' }}>
                <Text>{prop === 'login' ? 'Вход' : 'Регистрация'}</Text>
              </Flex>
              {prop === 'login' ? <></> : <Input id="1" name="login" value={authInputs.login} onChange={changeHandler} placeholder="Логин" w={'380px'} rounded={'50px'} type="text" marginTop={'20px'} />}
              <Input id="2" name="email" value={authInputs.email} onChange={changeHandler} placeholder="email" type="email" w={'380px'} rounded={'50px'} marginTop={'15px'} marginBottom={'15px'} />
              <Input id="3" name="password" value={authInputs.password} onChange={changeHandler} placeholder="Пароль" w={'380px'} rounded={'50px'} type="password" marginBottom={'15px'} />
              {prop === 'login' ? (
                <NavLink to="/registration" mb={'10px'} style={{ fontFamily: 'Roboto Condensed', fontSize: '20px' }}>
                  Регистрация
                </NavLink>
              ) : (
                <Input id="4" name="repassword" placeholder="Повторите пароль" type="password" w={'380px'} rounded={'50px'} marginbottom={'15px'} />
              )}

              <Button type="submit" w={'380px'} rounded={'50px'} m={'5'} style={{ color: 'white', backgroundColor: '#1D0F0F' }}>
                {prop === 'login' ? 'Войти' : 'Подтвердить'}
              </Button>
            </Flex>
          </form>
        </Flex>
      </Box>
    </Center>
  );
}
