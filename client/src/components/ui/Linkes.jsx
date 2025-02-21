import { Box, Button, Card, Flex, IconButton } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

import React from 'react';

export default function Linkes({ setViewBoard }) {
  const closeLinks = (event) => {
    setViewBoard(false);
  };

  return (
    <Card w="900 px" h="900px" rounded={30} m="33px" p="10px">
      <Flex justifyContent="end">
        <IconButton onClick={closeLinks} isRound={true} variant="solid" colorScheme="gray" aria-label="Done" fontSize="20px" icon={<CloseIcon />} />
      </Flex>
    </Card>
  );
}
