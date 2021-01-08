import React from 'react';
import { Flex, Divider, Heading, Link } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

export const Navbar: React.FC = () => {
  return (
    <>
      <Flex align='center' justify='space-between' p={2} mx={{ base: '5%' }}>
        <Link as={ReactRouterLink} to='/'>
          <Heading fontSize={[20, 'md', 'lg', 'xl']}>Where in the world?</Heading>
        </Link>
        <ColorModeSwitcher />
      </Flex>
      <Divider />
    </>
  );
};
