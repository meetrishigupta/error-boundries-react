import React from "react";
import { Component } from "react";

class ComponentA extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
    console.log("constructor");
  }

  static getDerivedStateFromProps() {
    console.log("getDerviedStateFromProps");
  }
  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/userss") //url wrong
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
    console.log(this.state.data);
  }
  render() {
    {
      console.log("Render");
    }
    const { data } = this.state;

    return (
      <>
        <table border={"1px"} cellPadding={"10px"}>
          <tr>
            <th style={{ textAlign: "left" }}>Id</th>
            <th style={{ textAlign: "left" }}>Name</th>

            <th style={{ textAlign: "left" }}>Phone</th>
            <th style={{ textAlign: "left" }}>Company Name</th>
          </tr>
          {data.map((d) => {
            return (
              <>
                <tr>
                  <td>{d.id}</td>
                  <td>{d.username}</td>

                  <td>{d.phone}</td>
                  <td>{d.company.name}</td>
                </tr>
              </>
            );
          })}
        </table>
        <h1>{this.state.name}</h1>
      </>
    );
  }
}

export default ComponentA;
