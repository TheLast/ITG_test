// eslint-disable-next-line no-unused-vars
import { request, filterResponse } from './helpers';

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */

export default async function getData() {
  try {
    const vehiclesGeneralData = await request('/api/vehicles.json');
    const vehicleDetailsApiCall = vehiclesGeneralData.map((item) => request(item.apiUrl));
    const vehicleDetailsAll = await Promise.allSettled(vehicleDetailsApiCall);
    const vehicleFilteredDetails = vehicleDetailsAll.filter((item) => filterResponse(item)).map((item) => item.value);
    const vehiclesTrimmedApiUrl = vehiclesGeneralData.map(({ apiUrl, ...rest }) => rest);
    const vehicleDetailsCombined = vehicleFilteredDetails.map(({ apiUrl, ...rest }) => rest).map((item) => {
      return {
        ...item,
        ...vehiclesTrimmedApiUrl.find((vehicle) => vehicle.id === item.id)
      };
    });
    return Promise.resolve(vehicleDetailsCombined);
  } catch (error) {
    return Promise.reject(error);
  }
}
