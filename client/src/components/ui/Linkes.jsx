import { Box, Button, Card, Flex, IconButton } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

import React, { useEffect, useState } from 'react';

export default function Linkes({ user, setViewBoard }) {
  const [links, setLinks] = useState([])

  const closeLinks = (event) => {
    setViewBoard(false);
  };

  useEffect(() => {
    // console.log('mood', user[1]);
    // console.log('mood', user[0]);
    //setClick(false);
    fetch(`http://localhost:3000/api/link/1/boardlinks/`)
      .then((res) => res.json())
      .then((data) => setLinks(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Card w="900 px" h="900px" rounded={30} m="33px" p="10px">
      <Flex justifyContent="end">
        <IconButton onClick={closeLinks} isRound={true} variant="solid" colorScheme="gray" aria-label="Done" fontSize="20px" icon={<CloseIcon />} />
        <Box></Box>
      </Flex>
    </Card>
  );
}
