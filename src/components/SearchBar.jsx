import { Search } from 'lucide-react';

/**
 * SearchBar
 * ─────────────────────────────────────────────────────────────────
 * Renders the city search input + button.
 *
 * Props:
 *  - city (string)           : controlled input value
 *  - setCity (fn)            : updates city state
 *  - onSearch (fn)           : called when user submits a search
 *  - isLoading (bool)        : disables controls during fetch
 */
function SearchBar({ city, setCity, onSearch, isLoading }) {
  // Allow pressing Enter to trigger search
  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      onSearch();
    }
  }

  return (
    <div className="search-bar" role="search">
      <div className="search-input-wrapper">
        <Search size={18} className="search-icon-inside" aria-hidden="true" />
        <input
          type="text"
          className="search-input"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyDown}
          aria-label="City name"
          disabled={isLoading}
          autoComplete="off"
          spellCheck="false"
        />
      </div>

      <button
        className="search-btn"
        onClick={onSearch}
        disabled={isLoading}
        aria-label="Search weather"
      >
        <Search size={18} aria-hidden="true" />
        Search
      </button>
    </div>
  );
}

export default SearchBar;
