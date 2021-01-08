export const getAllCountries = () => {
  return fetch('https://restcountries.eu/rest/v2/all')
    .then((res) => res.json())
    .then((data) => data)
    .catch(e => console.log(e));
}