/**
 * A utility function to make a network api call
 *
 * @param {string} apiUrl
 * @return {Promise<Object>}
 */
export async function request(apiUrl) {
  return fetch(apiUrl)
    .then((response) => response.json())
    .catch((error) => Promise.reject(error));
}

/**
 * A utility function to filter vehicales based on params.
 * Using fulfilled status and price as default params
 *
 * @param {object} vehicle
 * @param {string} [status=fulfilled]
 * @param {string} [attr=price]
 * @return {Boolean}
 */
export const filterResponse = (vehicle, status = 'fulfilled', attr = 'price') => {
  if (!vehicle.value) return false;
  return vehicle.status === status && !!vehicle.value[attr];
};
