import { Button } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';

export default function MainPage() {

  const handleDeleteBoard = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_FETCH}/api/board/7`
    );
    if (response.status === 200) {
      console.log(response);
    }
  };

  return (
    <>
      <Button onClick={handleDeleteBoard}>Delete</Button>
     
    </>
  );
}
