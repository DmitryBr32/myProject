import { Button, Wrap } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import OneBoard from '../ui/OneBoard';
import ColorBoard from '../ui/ColorBoard';

export default function MainPage() {
  const [colors, setColors] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:3000/api/board/`)
  //     .then((res) => res.json())
  //     .then((data) => setBoards(data))
  //     .catch((err) => console.log(err));
  // }, []);

  const getColorsHandle = async (e) => {
    e.preventDefault();

    // if (inputs.password !== inputs.repassword) {
    //   alert('Пароли не совпадают');
    //   return;
    // }
    try {
      fetch(`https://www.csscolorsapi.com/api/colors/theme/light`)
        .then((res) => res.json())
        //console.log(res)
        .then((data) => setColors(data.colors))
        .catch((err) => console.log(err));
    } catch (error) {
      console.error('Ошибка при запросе', error);
    }
  };

  return (
    <>
      <Button onClick={getColorsHandle}>Цвет</Button>
      <Wrap m={10} spacing="30px" templateColumns="repeat(4, 1fr)" gap={6}>
        {colors.map((color) => (
          <ColorBoard key={color.name} prop={[color.name, color.hex, color.rgb]} />
        ))}
      </Wrap>
    </>
  );
}
