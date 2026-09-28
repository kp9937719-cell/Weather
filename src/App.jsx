import { useState } from 'react';
import './App.css';

import { fetchWeather } from './api/weatherApi';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import WeatherDetails from './components/WeatherDetails';
import Loading from './components/Loading';
import ErrorMessage from './components/ErrorMessage';
import { Clock } from 'lucide-react';

// ─── localStorage helpers ─────────────────────────────────────────────────────
const HISTORY_KEY = 'weather_search_history';
const MAX_HISTORY = 3;

function getHistory() {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
  } catch {
    return [];
  }
}

function saveToHistory(city) {
  const trimmed = city.trim();
  if (!trimmed) return;

  const existing = getHistory().filter(
    (c) => c.toLowerCase() !== trimmed.toLowerCase()
  );
  const updated = [trimmed, ...existing].slice(0, MAX_HISTORY);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
}

// ─── App Component ────────────────────────────────────────────────────────────
function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [history, setHistory] = useState(getHistory);

  // Core search function — also used when clicking a history chip
  async function handleSearch(searchCity) {
    const target = (searchCity || city).trim();

    if (!target) {
      setError('Please enter a city name.');
      return;
    }

    setLoading(true);
    setError('');
    setWeather(null);

    try {
      const data = await fetchWeather(target);
      setWeather(data);

      // Persist to history
      saveToHistory(target);
      setHistory(getHistory());

      // Sync input with what was actually searched
      setCity(target);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app">
      {/* ── Header ── */}
      <header className="header">
        <h1>
          <span className="emoji" aria-hidden="true">🌤️</span>
          Weather App
        </h1>
        <p>Real-time weather for any city in the world</p>
      </header>

      {/* ── Main Content ── */}
      <main className="content">
        {/* Search Bar */}
        <SearchBar
          city={city}
          setCity={setCity}
          onSearch={() => handleSearch()}
          isLoading={loading}
        />

        {/* Search History */}
        {history.length > 0 && (
          <div className="search-history" aria-label="Recent searches">
            <span className="history-label">Recent:</span>
            {history.map((item) => (
              <button
                key={item}
                className="history-btn"
                onClick={() => handleSearch(item)}
                aria-label={`Search again for ${item}`}
              >
                <Clock size={12} aria-hidden="true" />
                {item}
              </button>
            ))}
          </div>
        )}

        {/* Loading */}
        {loading && <Loading />}

        {/* Error */}
        {!loading && error && <ErrorMessage message={error} />}

        {/* Weather Results */}
        {!loading && weather && (
          <>
            <WeatherCard data={weather} />
            <WeatherDetails data={weather} />
          </>
        )}

        {/* Default empty state */}
        {!loading && !error && !weather && (
          <div className="empty-state">
            <span className="empty-state-icon" aria-hidden="true">🌍</span>
            <h2>Search for a city</h2>
            <p>Enter a city name above to see the current weather.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
