import { Component } from "react";
import PropTypes from "prop-types";

/**
 * ErrorBoundary Component
 * 
 * Catch JavaScript errors anywhere in their child component tree,
 * log those errors, and display a fallback UI instead of the component tree that crashed.
 * 
 * Following Vercel's best practices for resilient UI.
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="p-8 my-4 rounded-3xl bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 text-center">
          <h3 className="text-lg font-bold text-red-600 dark:text-red-400 mb-2">
            Algo salió mal en esta sección
          </h3>
          <p className="text-sm text-red-500 dark:text-red-300 mb-4">
            No te preocupes, el resto de la aplicación sigue funcionando.
          </p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full text-xs font-bold transition-all"
          >
            Reintentar
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  fallback: PropTypes.node,
};

export default ErrorBoundary;
