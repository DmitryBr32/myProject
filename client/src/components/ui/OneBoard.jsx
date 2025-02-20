import { Box, Button, Card, CardBody, CardHeader, Center, Heading, Link, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import axiosInstance from '../../utils/axiosInstanse';
import { Form } from 'react-router-dom';

export default function OneBoard({ prop, setClick }) {
  //const [reTitle, setReTitle] = useState(false);
  const [titleInput, setTitleInput] = useState('');

  const changeHandler = (event) => {
    event.preventDefault();
    setTitleInput(() => event.target.value);
  };

  async function deleteBoardHandler(event) {
    console.log('del отработал');
    event.preventDefault();
    try {
      await axiosInstance.delete(`/board/${prop[0]}`);
      setClick(true);
    } catch (error) {
      console.log(error, 'что-то c del не так');
      setClick(false);
    }
  }

  async function addTitleHandler(event) {
    console.log('put отработал');
    event.preventDefault();
    //setReTitle(false);
    try {
      await axiosInstance.put(`/board/${prop[0]}`, {
        title: titleInput | ' ',
      });
      setClick(true);
    } catch (error) {
      console.log(error, 'что-то c del не так');
      setClick(false);
    }
  }

  return (
    <Box>
      <Center mb="10px">
        <Link>
          <Heading size="md">{prop[1]}</Heading>
        </Link>
        {/* <Form>
          <Input name="title" value={titleInput} onChange={changeHandler} placeholder="title" type="text" w={'380px'} rounded={'50px'} mt={'15px'} mb={'15px'} />
          <Button onClick={addTitleHandler}>OK</Button>
        </Form> */}
      </Center>
      <Card align="center" w="300px" h="300px" rounded={30} _hover={{ outlineColor: '#f0f0f0', outlineStyle: 'auto', backgroundColor: '#FFF0F5' }}>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>
      <Center mt="10px">{prop[2] ? <Button onClick={deleteBoardHandler}>del</Button> : <></>}</Center>
    </Box>
  );
}
