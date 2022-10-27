import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { decrement, increment, RootState } from './store';
import { useDispatch } from 'react-redux';
import { Box, Button, Center, Container, Grid, GridItem, HStack, Stack, Text } from '@chakra-ui/react';

function App() {

  const counterValue = useSelector((state: RootState) => state.value)
  const dispath = useDispatch();
  return (

    <Container h={"100vh"} alignContent="center">
      <Center h={"100vh"}>
        <Stack>
          <Text textAlign={"center"} borderWidth="medium">{counterValue}</Text>
          <Box alignContent={"center"}>
            <Stack>
              <Button onClick={() => dispath(increment())}>Increment</Button>
              <Button onClick={() => dispath(decrement())}>Decrement</Button>
            </Stack>
          </Box>
        </Stack>
      </Center>
    </Container>
  );
}

export default App;
