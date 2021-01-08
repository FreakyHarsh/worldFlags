import React from 'react';
import { Flex, Divider, Heading, Link } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { useStore } from '../store/store';
import { Actions } from '../types/Actions';

export const Navbar: React.FC = () => {
  const { dispatch } = useStore();
  const makeDefaultHandler = () => {
    dispatch({ type: Actions.setRegion, payload: 'Filter By Region' });
    dispatch({ type: Actions.setSearchInputValue, payload: '' });
  };
  return (
    <>
      <Flex
        align='center'
        as={ReactRouterLink}
        to='/'
        onClick={makeDefaultHandler}
        justify='space-between'
        p={2}
        mx={{ base: '5%' }}
      >
        <Heading fontSize={[20, 'md', 'lg', 'xl']}>Where in the world?</Heading>
        <ColorModeSwitcher />
      </Flex>
      <Divider />
    </>
  );
};
