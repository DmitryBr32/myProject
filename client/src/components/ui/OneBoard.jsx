import { Card, CardBody, CardHeader, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export default function OneBoard() {
  return (
    <>
      <Card>
        <CardHeader>
          <Heading size="md"> Customer dashboard</Heading>
        </CardHeader>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>
    </>
  );
}
