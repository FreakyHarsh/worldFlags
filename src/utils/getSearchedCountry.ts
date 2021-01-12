export const getSearchedCountry = (countryName: string) => {
  return fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
    .then((res) => res.json())
    .then((data) => data);
}