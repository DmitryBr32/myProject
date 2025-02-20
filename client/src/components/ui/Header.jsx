import { Box, Flex } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import axiosInstance, { setAccessToken } from '../../utils/axiosInstanse';
import { Link, NavLink, useNavigate } from 'react-router-dom';

export default function Header({ user, setUser }) {
  const navigate = useNavigate();

  async function logoutHandler() {
    console.log('Exit');
    await axiosInstance.get('/auth/logout');
    setUser('');
    setAccessToken('');
    navigate('/login');
  }

    useEffect(() => {
      
    }, []);
  

  return (
    <>
      <Box style={{ width: '100%', height: '80px', backgroundColor: '#f0eeef' }}>
        <Flex style={{ height: '100%', justifyContent: 'space-between', alignItems: 'center', marginLeft: '40px', marginRight: '20px' }}>
          <Link to="/">
            <Box style={{ fontFamily: 'MuseoModerno', fontSize: '50px' }} _hover={{ color: '#ffffff' }}>
              My Mood
            </Box>
          </Link>
          <Flex style={{ fontFamily: 'Montserrat Alternates', fontSize: '25px' }}>
            <NavLink to="/">
              <Box _hover={{ color: '#ffffff' }}>Главная</Box>
            </NavLink>
            <NavLink>
              <Box px="10px">|</Box>
            </NavLink>
            <NavLink to="/moodboard">
              <Box _hover={{ color: '#ffffff' }}>Доски</Box>
            </NavLink>
          </Flex>
          <Flex style={{ fontFamily: 'Montserrat Alternates' }}>
            {!user ? (
              <>
                <Link to="/login">
                  <Box _hover={{ color: '#ffffff' }}>Вход</Box>
                </Link>
                <NavLink>
                  <Box px="10px">|</Box>
                </NavLink>
                <NavLink to="/registration">
                  <Box _hover={{ color: '#ffffff' }}>Регистрация</Box>
                </NavLink>
              </>
            ) : (
              <>
                <Link to="/moodboard">
                  <Box _hover={{ color: '#ffffff' }}>{user}</Box>
                </Link>
                <NavLink>
                  <Box px="10px">|</Box>
                </NavLink>
                <NavLink to="/login">
                  <Box onClick={logoutHandler} _hover={{ color: '#ffffff' }}>
                    Выход
                  </Box>
                </NavLink>
              </>
            )}
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
