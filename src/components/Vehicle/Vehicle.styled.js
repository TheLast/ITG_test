import styled from 'styled-components';

import { Box, Flex, Text } from '../../styled-framework/index';

export const PictureWrapper = styled.picture`
  img {
    max-width: 100%;
    min-width: 180px;
  }
`;

export const VehicleTitle = styled(Text)`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.dark};
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: inline;
    padding: 2px 0;
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-color: ${({ theme }) => theme.colors.dark}
  }
`;
