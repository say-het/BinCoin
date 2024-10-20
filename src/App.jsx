import { VStack } from '@chakra-ui/react';
import Header from './componenets/Header';
import CameraInput from './componenets/CameraInput';
import BinSelection from './componenets/BinSelection';
import RewardDisplay from './componenets/RewardDisplay';
import Footer from './componenets/Footer';
function App() {
  return (
    <VStack spacing={8} padding={8}>
      <Header />
      <RewardDisplay />
      <CameraInput />
      <BinSelection />
      <Footer />
    </VStack>
  );
}

export default App;
