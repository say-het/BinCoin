import { HStack, Button, Text } from '@chakra-ui/react';

const BinSelection = () => (
  <HStack spacing={6} padding="2rem">
    <Button colorScheme="green">Recyclable</Button>
    <Button colorScheme="red">Non-recyclable</Button>
  </HStack>
);

export default BinSelection;
