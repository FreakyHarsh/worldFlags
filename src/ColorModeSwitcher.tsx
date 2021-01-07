import * as React from 'react';
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
  Text,
  Flex,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>;

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const colorModeText = colorMode === 'light' ? 'Light Mode' : 'Dark Mode';
  return (
    <IconButton
      size='md'
      fontSize={['sm', 'md', 'lg', 'xl']}
      variant='ghost'
      color='current'
      marginLeft='2'
      onClick={toggleColorMode}
      icon={
        <Flex p={2} fontSize={['sm', 'md']} fontWeight={400}>
          <SwitchIcon />
          <Text ml={1}>{colorModeText}</Text>
        </Flex>
      }
      aria-label={`Switch to mode`}
      {...props}
    />
  );
};
