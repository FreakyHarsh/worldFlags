import React from 'react';
import { CircularProgress, useColorModeValue } from '@chakra-ui/react';
export const Loader = () => {
  const loaderColor = useColorModeValue('blue.300', 'green.300');
  return <CircularProgress isIndeterminate color={loaderColor} size={16} thickness={8} />;
};
