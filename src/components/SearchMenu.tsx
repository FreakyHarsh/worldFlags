import React, { useState } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Stack, Box, Input, Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';

export const SearchMenu: React.FC = () => {
  const [dropDownTitle, setDropDownTitle] = useState('Filter By Region');
  const [search, setSearch] = useState(null);

  const onMenuHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
    setDropDownTitle((e.target as any).firstChild.data);

  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  return (
    <div>
      <Stack
        direction={['column', 'row']}
        justify='space-between'
        py={5}
        spacing='1rem'
        mx={{ base: '5%' }}
      >
        <Box width={{ md: '50%' }}>
          <Input variant='outline' placeholder='Search for a country...' />
        </Box>
        <Box>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              {dropDownTitle}
            </MenuButton>
            <MenuList onClick={onMenuHandler}>
              {regions.map((region) => (
                <MenuItem key={region}>{region}</MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Box>
      </Stack>
    </div>
  );
};
