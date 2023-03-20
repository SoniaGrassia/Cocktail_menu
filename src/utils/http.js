const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1";

export const GET = async (endpoint) => {
  const resp = await fetch(`${BASE_URL}/${endpoint}`);
  const data = await resp.json();

  return data;
};
