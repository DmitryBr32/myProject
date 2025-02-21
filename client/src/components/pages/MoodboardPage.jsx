import { Card, Grid, Box, Flex, Img, Wrap } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useState } from 'react';
import OneBoard from '../ui/OneBoard';
import axios from 'axios';
import axiosInstance from '../../utils/axiosInstanse';
import { Links } from 'react-router-dom';
import Linkes from '../ui/Linkes';

export default function MoodboardPage({ user }) {
  const [boards, setBoards] = useState([]);
  const [click, setClick] = useState(false);
  const [viewBoard, setViewBoard] = useState(false);

  // const handleDeleteBoard = (boardId) => {
  //   setBoards(boards.filter((el) => el.id !== boardId));
  // };

  async function addBoardHandler(event) {
    console.log('add отработал');
    event.preventDefault();
    try {
      const res = await axiosInstance.post(`/board/new`, {
        userId: user[1],
        title: 'create',
      });
      if (res.status === 201) {
        setClick(true);
      }
    } catch (error) {
      console.log(error, 'что-то c add не так');
      setClick(false);
    }
  }

  useEffect(() => {
    console.log('mood', user[1]);
    console.log('mood', user[0]);
    setClick(false);
    (user[1] ? fetch(`http://localhost:3000/api/board/${user[1]}/userboards`) : fetch(`http://localhost:3000/api/board`))
      .then((res) => res.json())
      .then((data) => setBoards(data))
      .catch((err) => console.log(err));
  }, [user[1], click]);

  return (
    <div>
      <Flex>
      {viewBoard ? (<Box w="75%" h="auto"><Linkes setViewBoard={setViewBoard}/></Box>):(<></>)}
      
        <Box w={viewBoard ? "25%" : "100%"} overflowY="auto" maxHeight="100vh"  m={10} className='scrollable'>
          <Wrap spacing="30px" templateColumns="repeat(4, 1fr)" gap={6}>
            {user[1] ? (
              <Card onClick={addBoardHandler} mt="33px" align="center" w="300px" h="300px" rounded={30} _hover={{ outlineColor: '#f0f0f0', outlineStyle: 'auto', backgroundColor: '#FFF0F5' }}>
                <Flex h="100%" style={{ alignItems: 'center' }}>
                  <svg width="150" height="150" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10 5C10.5523 5 11 5.44772 11 6V9L14 9C14.5523 9 15 9.44772 15 10C15 10.5523 14.5523 11 14 11H11V14C11 14.5523 10.5523 15 10 15C9.44771 15 9 14.5523 9 14V11H6C5.44772 11 5 10.5523 5 10C5 9.44771 5.44772 9 6 9L9 9V6C9 5.44772 9.44771 5 10 5Z"
                      fill="#374151"
                    />
                  </svg>
                </Flex>
              </Card>
            ) : (
              <></>
            )}

            {boards.map((board) => (
              <OneBoard key={board.id} prop={[board.id, board.title, user[1]]} board={board} setBoards={setBoards} setClick={setClick} setViewBoard={setViewBoard} />
            ))}
          </Wrap>
        </Box>
      </Flex>
    </div>
  );
}
