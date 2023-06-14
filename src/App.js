import React from "react";
import { Component } from "react";
import ComponentA from "./ComponentA";
import ErrorBoundary from "./ErrorBoundary";
class App extends React.Component {
  render() {
    return (
      <>
        <ErrorBoundary>
          <ComponentA />
        </ErrorBoundary>
      </>
    );
  }
}
export default App;
