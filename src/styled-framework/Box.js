import styled from 'styled-components';
import {
  compose, space, color, layout, border
} from 'styled-system';

const styleProps = compose(
  space, color, layout, border
);

export const Box = styled('div')(styleProps);
