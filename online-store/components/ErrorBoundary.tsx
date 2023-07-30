'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {

      const handleClick = () => {
        this.setState({ hasError: false })
      };

      return (
        <div className="error-block">
          <h2 className="error-title">Oops, there is an server error!</h2>
          <h3>
            The first server response can take 10-50 seconds, which is why you
            see this message!
          </h3>
          <button
            className="error-btn"
            type="button"
            onClick={handleClick}
          >
            Try again?
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
