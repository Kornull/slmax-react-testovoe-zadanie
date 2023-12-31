'use client';

import Link from 'next/link';
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
        this.setState({ hasError: false });
        location.reload();
      };

      return (
        <div className="error-block">
          <h2 className="error-title">Oops, there is a server error!</h2>
          <h3>
            The first server response can take 10-50 seconds, which is why you
            see this message!
          </h3>
          <Link
            href="/"
            className="error-btn"
            type="button"
            onClick={handleClick}
          >
            Try again?
          </Link>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
