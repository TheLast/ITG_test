import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  height: 100%;
  display: grid;
  grid-template-columns: auto;
  grid-auto-rows: 180px;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
  }
`;
