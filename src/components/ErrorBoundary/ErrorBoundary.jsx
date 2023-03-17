import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      message: "",
    };  
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="warning">
          <div className="warning-info">
            <h2>От халепа, щось пішло не так...</h2>
            <p>Виправте помилку тицьнувши на кнопку зверху, після цього спробуйте ще раз.</p>
          </div>
          <button
            className="warning-btn"
            type="button"
            onClick={() => this.setState({ hasError: false })}>Спробуєм ще раз?
          </button>
        </div>
      )
    }

    return this.props.children;
  }
}