import { Flex, Heading, Button } from '@chakra-ui/react';

const Header = () => (
  <Flex as="nav" padding="1.5rem" bg="teal.500" color="white" justify="space-between">
    <Heading as="h1" size="lg">BinCoin</Heading>
    <Button colorScheme="teal" variant="outline">Profile</Button>
  </Flex>
);

export default Header;
