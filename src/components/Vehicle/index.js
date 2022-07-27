import React from 'react';
import { PictureWrapper, VehicleTitle } from './Vehicle.styled';
import { Box, Flex, Text } from '../../styled-framework/index';

export function Vehicle({
  id, price, description, media
}) {
  return (
    <Flex flexDirection={['row', 'column']}>
      <Flex flex={['0 0 180px', '0 1 auto']}>
        <PictureWrapper>
          <source srcSet={media[0].url} media="(min-width: 40rem)" />
          <img src={media[1].url} alt={`${id} ${media[1].name}`} />
        </PictureWrapper>
      </Flex>
      <Flex flexDirection="column" alignItems={['flex-start', 'center']} p={[4, 2]}>
        <VehicleTitle as="h2" my={[0, 3]}>{id}</VehicleTitle>
        <Text as="p" fontSize={[2, 1]} mt="1" mb={[2, 2]}>{`From ${price}`}</Text>
        <Text as="p" fontSize={[1, 2]} my={[2, 1]} textAlign={['left', 'center']}>{description}</Text>
      </Flex>
    </Flex>
  );
}
