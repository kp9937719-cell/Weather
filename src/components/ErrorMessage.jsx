import { AlertCircle } from 'lucide-react';

/**
 * ErrorMessage
 * ─────────────────────────────────────────────────────────────────
 * Displays a user-friendly error message in a styled alert box.
 *
 * Props:
 *  - message (string) : the error text to display
 */
function ErrorMessage({ message }) {
  return (
    <div
      className="error-message"
      role="alert"
      aria-live="assertive"
    >
      <AlertCircle size={20} className="error-icon" aria-hidden="true" />
      <span>{message}</span>
    </div>
  );
}

export default ErrorMessage;
