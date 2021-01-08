export const getRegionCountries = (region: string) => {
  return fetch(`https://restcountries.eu/rest/v2/region/${region}`)
    .then(res => res.json())
    .then(data => data);
}