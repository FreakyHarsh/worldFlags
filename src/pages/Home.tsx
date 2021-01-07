import { Wrap, WrapItem } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { CountryCard } from '../components/CountryCard';
import { Navbar } from '../components/Navbar';
import { SearchMenu } from '../components/SearchMenu';

export const Home: React.FC = () => {
  const randomCountries: any = [];
  const [countries, setCountries] = useState<any[] | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      const countries = await fetch('https://restcountries.eu/rest/v2/all')
        .then((res) => res.json())
        .then((data) => data);
      const randomNumber = () => Math.floor(Math.random() * countries.length);
      for (let i = 0; i < 8; i++) {
        randomCountries.push(countries[randomNumber()]);
      }
      console.log(randomCountries);
      setCountries([...randomCountries]);
    };
    fetchCountries();
  }, []);
  return (
    <div>
      <Navbar />
      <SearchMenu />
      {countries && (
        <Wrap justify='center' spacing='2rem' p={5}>
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
      )}
    </div>
  );
};
