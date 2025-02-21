import { Box, Button, Card, CardBody, Center, Heading, Text, Link } from '@chakra-ui/react';
import React from 'react';

export default function ColorBoard({ prop }) {
  return (
    <Box>
      <Card backgroundColor={`#${prop[1]}`} align="center" w="200px" h="200px" rounded={30} _hover={{ outlineColor: '#aaaaaa', outlineStyle: 'auto', opacity: '50%', backgroundColor:`${prop[2]}`}}>
        <Heading size="md" mt='10px'>{prop[0]}</Heading>
        <CardBody>
          
        </CardBody>
      </Card>
    </Box>
  );
}
