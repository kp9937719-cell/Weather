/**
 * Loading
 * ─────────────────────────────────────────────────────────────────
 * Displays a CSS spinner with a "Loading weather..." label.
 * Shown while the API request is in-flight.
 */
function Loading() {
  return (
    <div
      className="loading"
      role="status"
      aria-live="polite"
      aria-label="Loading weather data"
    >
      <div className="spinner" aria-hidden="true" />
      <p>Loading weather...</p>
    </div>
  );
}

export default Loading;
