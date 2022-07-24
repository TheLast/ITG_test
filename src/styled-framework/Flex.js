import styled from 'styled-components';

import { flexbox } from 'styled-system';

import { Box } from './Box';

export const Flex = styled(Box)(
  {
    display: 'flex'
  },
  flexbox
);
