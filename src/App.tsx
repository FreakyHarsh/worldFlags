import * as React from 'react';
import { ChakraProvider, theme, Flex, Divider, Text, Heading } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex align='center' justify='space-between' p={2} mx={{ base: '5%' }}>
      <Heading fontSize={['sm', 'md', 'lg', 'xl']}>Where in the world?</Heading>
      <ColorModeSwitcher />
    </Flex>
    <Divider />
  </ChakraProvider>
);
