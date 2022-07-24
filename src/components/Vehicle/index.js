import React from 'react';
import { PictureWrapper } from './Vehicle.styled';
import { Box, Flex, Text } from '../../styled-framework/index';

export function Vehicle({
  id, price, description, media
}) {
  return (
    <Flex flexDirection={['row', 'column']}>
      <Flex flex="0 0 180px">
        <PictureWrapper>
          <source srcSet={media[0].url} media="(min-width: 40rem)" />
          <img src={media[1].url} alt={`${id} ${media[1].name}`} />
        </PictureWrapper>
      </Flex>
      <Flex flexDirection="column" alignSelf="flex-start" p={4}>
        <Text as="h2" my="0" fontSize="5">{id}</Text>
        <Text as="p" mt="1" mb="2">{price}</Text>
        <Text as="p" my="0">{description}</Text>
      </Flex>
    </Flex>
  );
}
