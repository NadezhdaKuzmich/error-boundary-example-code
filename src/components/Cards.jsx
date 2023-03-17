import React from "react";
import { ErrorBoundary } from "./ErrorBoundary/ErrorBoundary";
import Card from "./Card";

class Cards extends React.Component {
  state = {
    error: true,
  };

  toggle = () => {
    this.setState({ error: !this.state.error });
  };

  render() {
    return (
      <>
        <div className="toggle-box">
          <p>Oбрано: <b>"{this.state.error ? "Поганий приклад з помилкою" : "Добрий приклад"}"</b></p>
          <button className="toggle" onClick={this.toggle}> {this.state.error ? "Виправити помилку" : "Зробити пакість"}</button>
        </div>
        <hr />
        <div className="cards-box">
          <ErrorBoundary>
            <Card />
          </ErrorBoundary>
          <ErrorBoundary>
            <Card fail={this.state.error} />
          </ErrorBoundary>
          <ErrorBoundary>
            <Card />
          </ErrorBoundary>
        </div>
      </>
    );
  }
}

export default Cards;
