/**
 * WeatherDetails
 * ─────────────────────────────────────────────────────────────────
 * Renders a grid of 4 detail cards: Humidity, Wind Speed,
 * Pressure, and Visibility.
 *
 * Props:
 *  - data (object) : raw OpenWeatherMap API response object
 */
function WeatherDetails({ data }) {
  const { main, wind, visibility } = data;

  const details = [
    {
      icon: '💧',
      label: 'Humidity',
      value: main.humidity,
      unit: '%',
      ariaLabel: `Humidity: ${main.humidity}%`,
    },
    {
      icon: '💨',
      label: 'Wind Speed',
      value: (wind.speed * 3.6).toFixed(1), // m/s → km/h
      unit: 'km/h',
      ariaLabel: `Wind speed: ${(wind.speed * 3.6).toFixed(1)} km/h`,
    },
    {
      icon: '🌡️',
      label: 'Pressure',
      value: main.pressure,
      unit: 'hPa',
      ariaLabel: `Pressure: ${main.pressure} hPa`,
    },
    {
      icon: '👁️',
      label: 'Visibility',
      value: (visibility / 1000).toFixed(1), // m → km
      unit: 'km',
      ariaLabel: `Visibility: ${(visibility / 1000).toFixed(1)} km`,
    },
  ];

  return (
    <div className="weather-details" role="list" aria-label="Weather details">
      {details.map((item) => (
        <div
          key={item.label}
          className="detail-card"
          role="listitem"
          aria-label={item.ariaLabel}
        >
          <span className="detail-icon" aria-hidden="true">
            {item.icon}
          </span>
          <span className="detail-label">{item.label}</span>
          <div>
            <span className="detail-value">{item.value}</span>
            <span className="detail-unit"> {item.unit}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WeatherDetails;
