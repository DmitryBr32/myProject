import { Card, Grid } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useState } from 'react';
import OneBoard from '../ui/OneBoard';

export default function MoodboardPage({ user }) {
  const [boards, setBoards] = useState([]);

  // const handleDeleteBoard = (boardId) => {
  //   setBoards(boards.filter((el) => el.id !== boardId));
  // };

  // const addBoardHandler = (formData) => {
  //   const newBoard = {
  //     ...formData,
  //     title: 'Title',
  //   };
  //   setBoards([newBoard, ...boards]);
  // };

  useEffect(() => {
    console.log('mood', user[1]);
    console.log('mood', user[0]);
    // http://localhost:3000 + /api/students
    fetch(`http://localhost:3000/api/board`) // .GET
      .then((res) => res.json())
      //.then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, [user[1]]);

  return (
    <div>
      <Grid templateColumns="repeat(4, 1fr)" gap={6} m={10}>
        <Card align="center" h="300" rounded={30} _hover={{ backgroundColor: 'grey' }}>
          X
        </Card>

        {/* {boards.map((board) => (
          <Box key={board.id} align="center" h="300" rounded={30}>
            <OneBoard board={board} setBoards={setBoards} />
          </Box>
        ))} */}
      </Grid>
    </div>
  );
}
