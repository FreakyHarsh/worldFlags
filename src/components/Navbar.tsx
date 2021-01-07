import React from 'react';
import { Flex, Divider, Heading } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

export const Navbar: React.FC = () => {
  return (
    <>
      <Flex align='center' justify='space-between' p={2} mx={{ base: '5%' }}>
        <Heading fontSize={[20, 'md', 'lg', 'xl']}>Where in the world?</Heading>
        <ColorModeSwitcher />
      </Flex>
      <Divider />
    </>
  );
};
