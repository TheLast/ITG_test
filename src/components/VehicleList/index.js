import React from 'react';
import useData from './useData';
import { Vehicle } from '../Vehicle/index';
import { Container } from './VehicleList.styled';

// @TODO: remove after testing
const Footer = () => (
  <div>
    <p>
      Visit
      <a href="/api/vehicles.json" target="_blank"> /api/vehicles.json</a>
      {' '}
      (main endpoint)
    </p>
    <p>
      Visit
      <a href="/api/vehicle_fpace.json" target="_blank">/api/vehicle_fpace.json</a>
      {' '}
      (detail endpoint - apiUrl)
    </p>
    <p>
      Visit
      <a href="/api/vehicle_xf.json" target="_blank">/api/vehicle_xf.json</a>
      {' '}
      (vehicle without any price)
    </p>
  </div>
);

export default function VehicleList() {
  // eslint-disable-next-line no-unused-vars
  const [loading, error, vehicles] = useData();

  console.log('vehicles', vehicles);

  if (loading) {
    return <div data-testid="loading">Loading</div>;
  }

  if (error) {
    return <div data-testid="error">{ error }</div>;
  }

  return (
    <div data-testid="results">
      <Container>
        {vehicles.map((props) => {
          const {
            id, price, description, media, modelYear
          } = props;
          return (
            <Vehicle
              key={`${id}-${modelYear}`}
              id={id}
              price={price}
              description={description}
              media={media}
            />
          );
        })}
      </Container>

      <Footer />
    </div>
  );
}
