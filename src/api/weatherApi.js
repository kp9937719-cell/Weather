/**
 * fetchWeather
 * ───────────────────────────────────────────
 * Fetches current weather data from the OpenWeatherMap API.
 *
 * @param {string} city - City name entered by the user.
 * @returns {Promise<Object>} - Resolved weather data object.
 * @throws {Error} - Descriptive error message if fetch fails.
 */
export async function fetchWeather(city) {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  if (!apiKey || apiKey === 'your_openweathermap_api_key_here') {
    throw new Error(
      'API key is missing. Please add your OpenWeatherMap API key to the .env file.'
    );
  }

  const trimmedCity = city.trim();

  if (!trimmedCity) {
    throw new Error('Please enter a city name.');
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    trimmedCity
  )}&appid=${apiKey}&units=metric`;

  let response;
  try {
    response = await fetch(url);
  } catch {
    throw new Error(
      'Network error. Please check your internet connection and try again.'
    );
  }

  if (response.status === 404) {
    throw new Error(
      'City not found. Please check the city name and try again.'
    );
  }

  if (response.status === 401) {
    throw new Error(
      'Invalid API key. Please check your OpenWeatherMap API key.'
    );
  }

  if (!response.ok) {
    throw new Error(`Something went wrong (status ${response.status}). Please try again.`);
  }

  const data = await response.json();
  return data;
}
