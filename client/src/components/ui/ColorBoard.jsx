import { Box, Button, Card, CardBody, Center, Heading, Text, Link, Select } from '@chakra-ui/react';
import React, { useState } from 'react';
import axiosInstance from '../../utils/axiosInstanse';

export default function ColorBoard({ prop, user }) {
  const [change, setChange] = useState(false);
  const [boards, setBoards] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');

  async function changeBoard() {
    fetch(`http://localhost:3000/api/board/${user}/userboards`)
      .then((res) => res.json())
      .then((data) => setBoards(data))
      .catch((err) => console.log(err));
    setChange(true);
  }

  async function addColorBoard(event) {
    console.log('add отработал');
    event.preventDefault();
    try {
      await axiosInstance.post(`/link/new`, {
        title: prop[0],
        hex: `#${prop[1]}`,
        userId: user,
        boardId: selectedValue,
      });
      setChange(false);
    } catch (error) {
      console.log(error, 'что-то c add не так');
    }
  }

  return (
    <Box>
      {change ? (
        <>
          <Select placeholder="Select option">
            {boards.map((board) => (
              <option key={board.id} value={setSelectedValue(board.id)}>
                {board.title}
              </option>
            ))}
          </Select>
          <Button onClick={addColorBoard}>OK</Button>
        </>
      ) : (
        <></>
      )}
      <Card backgroundColor={`#${prop[1]}`} align="center" w="200px" h="200px" rounded={30} _hover={{ outlineColor: '#aaaaaa', outlineStyle: 'auto', opacity: '50%', backgroundColor: `${prop[2]}` }}>
        <Heading size="md" mt="10px">
          {prop[0]}
        </Heading>
        <CardBody onClick={changeBoard}>
          <Text>#{prop[1]}</Text>
        </CardBody>
      </Card>
    </Box>
  );
}
