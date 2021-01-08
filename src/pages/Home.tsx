import { Box, Wrap, WrapItem } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CountryCard } from '../components/CountryCard';
import { Navbar } from '../components/Navbar';
import { SearchMenu } from '../components/SearchMenu';
import { getAllCountries } from '../utils/getAllCountries';
import { getRegionCountries } from '../utils/getRegionCountries';

export const Home: React.FC = () => {
  const [countries, setCountries] = useState<any[] | null>(null);
  const { region } = useParams<{ region: string }>();

  useEffect(() => {
    const fetchCountries = async () => {
      const res = await getAllCountries();
      setCountries([...res]);
    };
    const fetchRegionCountries = async () => {
      const res = await getRegionCountries(region.toLowerCase());
      setCountries([...res]);
    };
    try {
      region ? fetchRegionCountries() : fetchCountries();
    } catch (e) {
      console.log(e);
    }
  }, [region]);
  return (
    <div>
      <Navbar />
      <SearchMenu />
      {countries && (
        <Box mx={{ base: '5%' }}>
          <Wrap justify='center' spacing='2rem' pt={5}>
            {countries.map((country) => (
              <WrapItem key={country.name}>
                <CountryCard
                  flag={country.flag}
                  name={country.name}
                  population={country.population}
                  region={country.region}
                />
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      )}
    </div>
  );
};
