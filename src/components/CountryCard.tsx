import { Box, VStack, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';
interface CardProps {
  flag: string;
  name: string;
  population: number;
  region: string;
}
export const CountryCard = ({ flag, name, population, region }: CardProps) => {
  const bg = useColorModeValue('#FFFFFF', '#222E38');
  const history = useHistory();
  return (
    <div>
      <Box
        boxShadow='base'
        borderRadius='5px'
        w='16rem'
        maxH='25rem'
        overflow='hidden'
        borderWidth='1px'
        onClick={() => history.replace('country/' + name)}
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
          <Text fontWeight='600' fontSize={16} pt={2} w='100%' isTruncated>
            {name}
          </Text>
          <Text fontSize={13} fontWeight='300' mt='0'>
            <Box as='span' fontWeight='600'>
              Population:{' '}
            </Box>
            {population.toLocaleString()}
          </Text>
          <Text fontSize={13} fontWeight='300'>
            <Box as='span' fontWeight='600'>
              Region:{' '}
            </Box>
            {region}
          </Text>
          <Text fontSize={13} fontWeight='300' w='100%' isTruncated>
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
