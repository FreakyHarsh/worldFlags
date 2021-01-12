import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Box, Button, Image, Stack, Text, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

export const CountryInfo: React.FC = () => {
  const { country } = useParams<{ country: string }>();
  const [countryInfo, setCountryInfo] = useState<any>();
  useEffect(() => {
    const fetchInfo = async () => {
      const info = await fetch('https://restcountries.eu/rest/v2/name/' + country)
        .then((res) => res.json())
        .then((data) => data);
      setCountryInfo({ ...info[0] });
    };
    fetchInfo();
  }, []);
  const borderCountries = (
    <Stack direction={['column', 'row']} py={5} px={[null, 4]}>
      <Text fontSize={16} fontWeight='600'>
        Border Countries:
      </Text>
      <Wrap>
        {countryInfo.borders.map((border: any) => (
          <WrapItem key={border}>{border}</WrapItem>
        ))}
      </Wrap>
    </Stack>
  );
  const listBuilder = (name: string, key: any) => {
    return (
      <Box fontSize={16} fontWeight='600'>
        {name}:{' '}
        <Text as='span' fontSize={15} fontWeight='400'>
          {key}
        </Text>
      </Box>
    );
  };
  return (
    <div>
      <Navbar />
      <Box textAlign='start' mx='5%' p={5}>
        <Button leftIcon={<ChevronLeftIcon />} as={Link} to='/'>
          Back
        </Button>
      </Box>
      {console.log(countryInfo)}
      {countryInfo && (
        <Stack direction={['column', 'row']} justify='space-between' py={5} spacing='1rem' mx='5%'>
          <Box width={{ sm: '50%' }}>
            <Image src={countryInfo.flag} />
          </Box>
          <Box width={{ sm: '50%' }}>
            <Text fontSize={30} fontWeight='700' px={[null, 4]}>
              {countryInfo.name}
            </Text>
            <Stack direction={['column', 'row']}>
              <VStack width={{ sm: '50%' }} spacing='0' align='start' py={4} px={[null, 4]}>
                {listBuilder('Native Name', countryInfo.nativeName)}
                {listBuilder('Population', countryInfo.population)}
                {listBuilder('Region', countryInfo.region)}
                {listBuilder('Sub Region', countryInfo.subregion)}
                {listBuilder('Capital', countryInfo.capital)}
              </VStack>
              <VStack width={{ sm: '50%' }} spacing='0' align='start' py={4}>
                {listBuilder('Top Level Domain', countryInfo.topLevelDomain)}
                {listBuilder(
                  'Currencies',
                  countryInfo.currencies.map((curr: any) => curr.name)
                )}
                {listBuilder(
                  'Languages',
                  countryInfo.languages.map((lang: any) => lang.name)
                )}
              </VStack>
            </Stack>
            {countryInfo.borders.length > 0 && borderCountries}
          </Box>
        </Stack>
      )}
    </div>
  );
};
