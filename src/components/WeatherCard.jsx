import { Thermometer } from 'lucide-react';

/**
 * WeatherCard
 * ─────────────────────────────────────────────────────────────────
 * Displays the primary weather info: city, country, temperature,
 * condition, description, icon, and feels-like temperature.
 *
 * Props:
 *  - data (object) : raw OpenWeatherMap API response object
 */
function WeatherCard({ data }) {
  const {
    name,
    sys,
    main,
    weather,
    wind,
  } = data;

  const condition = weather[0].main;
  const description = weather[0].description;
  const iconCode = weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  const temp = Math.round(main.temp);
  const feelsLike = Math.round(main.feels_like);

  return (
    <div className="weather-card" aria-label={`Weather in ${name}`}>
      {/* Top row: location + icon */}
      <div className="weather-card-top">
        <div className="weather-location">
          <h2>{name}</h2>
          <p className="country">{sys.country}</p>
        </div>
        <img
          src={iconUrl}
          alt={description}
          className="weather-icon-img"
          width={72}
          height={72}
        />
      </div>

      {/* Temperature row */}
      <div className="weather-temp-row">
        <span className="temperature">{temp}</span>
        <span className="temp-unit">°C</span>

        <div className="weather-meta">
          <span className="weather-condition">{condition}</span>
          <span className="weather-description">{description}</span>
        </div>
      </div>

      {/* Feels like */}
      <div className="feels-like">
        <Thermometer size={16} aria-hidden="true" />
        Feels like&nbsp;<strong>{feelsLike}°C</strong>
      </div>
    </div>
  );
}

export default WeatherCard;
