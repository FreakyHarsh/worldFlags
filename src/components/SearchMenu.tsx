import React, { useEffect, useState } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Stack, Box, Input, Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { useStore } from '../store/store';
import { useHistory } from 'react-router-dom';
import { Actions } from '../types/Actions';
import { getAllCountries } from '../utils/getAllCountries';
import { getSearchedCountry } from '../utils/getSearchedCountry';

export const SearchMenu: React.FC = () => {
  const {
    state: { region, clearSearch },
    dispatch,
  } = useStore();

  let history = useHistory();
  const [search, setSearch] = useState('');
  const onMenuHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const region = (e.target as any).firstChild.data;
    dispatch({ type: 'setRegion', payload: region });
    history.push(region);
  };

  useEffect(() => {
    setSearch('');
  }, [clearSearch]);

  const searchResult = (res: any) => {
    if (!res.status) {
      dispatch({ type: Actions.setCountries, payload: [...res] });
    } else {
      dispatch({ type: Actions.setCountries, payload: [] });
    }
  };
  useEffect(() => {
    const timeout = setTimeout(async () => {
      if (search) {
        const res = await getSearchedCountry(search.toLowerCase());
        searchResult(res);
      } else if (search === '') {
        const res = await getAllCountries();
        searchResult(res);
      }
    }, 500);
    return () => clearTimeout(timeout);
  }, [search]);
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  return (
    <div>
      <Stack direction={['column', 'row']} justify='space-between' py={5} spacing='1rem' mx='5%'>
        <Box width={{ md: '50%' }}>
          <Input
            variant='outline'
            value={search}
            placeholder='Search for a country...'
            onChange={(event) => {
              const value = event.target.value;
              setSearch(value);
            }}
          />
        </Box>
        <Box>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              {region}
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
