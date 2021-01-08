import { Box, Button, Flex, Wrap, WrapItem } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CountryCard } from '../components/CountryCard';
import { Navbar } from '../components/Navbar';
import { SearchMenu } from '../components/SearchMenu';
import { getAllCountries } from '../utils/getAllCountries';
import { getRegionCountries } from '../utils/getRegionCountries';
import { useStore } from '../store/store';
import { Actions } from '../types/Actions';

export const Home: React.FC = () => {
  const { region } = useParams<{ region: string }>();
  const {
    state: { countries, clearSearch },
    dispatch,
  } = useStore();

  useEffect(() => {
    const fetchCountries = async () => {
      const res = await getAllCountries();
      dispatch({ type: Actions.setCountries, payload: [...res] });
    };
    const fetchRegionCountries = async () => {
      const res = await getRegionCountries(region.toLowerCase());
      dispatch({ type: Actions.setCountries, payload: [...res] });
    };
    try {
      region ? fetchRegionCountries() : fetchCountries();
    } catch (e) {
      console.log(e);
    }
  }, [region, clearSearch]);
  const countryList = (pageno: number) => {
    let page = countries.slice((pageno - 1) * 8, pageno * 8);
    return page.map((country: any) => (
      <WrapItem key={country.name}>
        <CountryCard
          flag={country.flag}
          name={country.name}
          population={country.population}
          region={country.region}
        />
      </WrapItem>
    ));
  };
  const pagination = () => {
    const pageList = [];
    for (let i = 1; i <= 5; i++) {
      pageList.push(
        <Button onClick={() => setPage(i)} mr={2}>
          {i}
        </Button>
      );
    }
    return pageList;
  };
  const [page, setPage] = useState(1);
  const notFoundElement = <Box>Not Found</Box>;
  return (
    <div>
      <Navbar />
      <SearchMenu />
      {countries && (
        <Box mx='5%'>
          <Wrap justify='center' spacing='2rem' pt={5}>
            {countries.length === 0 ? notFoundElement : countryList(page)}
          </Wrap>
          {countries.length > 42 && (
            <Flex justify='center' p={2}>
              {pagination()}
            </Flex>
          )}
        </Box>
      )}
    </div>
  );
};
