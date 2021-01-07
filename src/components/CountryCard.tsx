import { Box, VStack, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
interface CardProps {
  flag: string;
  name: string;
  population: number;
  region: string;
}
export const CountryCard = ({ flag, name, population, region }: CardProps) => {
  const bg = useColorModeValue('#FFFFFF', '#222E38');

  return (
    <div>
      <Box
        boxShadow='base'
        borderRadius='5px'
        w='16rem'
        maxH='25rem'
        overflow='hidden'
        borderWidth='1px'
      >
        <Box w='16rem' h='10rem'>
          <div
            style={{
              backgroundImage: `url(${flag})`,
              width: '100%',
              height: '100%',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
        </Box>
        <VStack align='flex-start' p={4} bg={bg}>
          <Text fontWeight='600' fontSize={16} pt={2}>
            {name}
          </Text>
          <Text fontSize={14} fontWeight='300'>
            <Box as='span' fontWeight='600'>
              Population:{' '}
            </Box>
            {population.toLocaleString()}
          </Text>
          <Text fontSize={14} fontWeight='300'>
            <Box as='span' fontWeight='600'>
              Region:{' '}
            </Box>
            {region}
          </Text>
          <Text fontSize={14} fontWeight='300'>
            <Box as='span' fontWeight='600'>
              Country:{' '}
            </Box>
            {name}
          </Text>
        </VStack>
      </Box>
    </div>
  );
};
