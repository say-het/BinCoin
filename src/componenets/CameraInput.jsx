import { VStack, Button, Text } from '@chakra-ui/react';

const CameraInput = () => (
  <VStack spacing={4} padding="2rem">
    <Text fontSize="lg">Take a photo of throwing waste into the bin</Text>
    <Button colorScheme="blue">Capture / Upload Photo</Button>
  </VStack>
);

export default CameraInput;
