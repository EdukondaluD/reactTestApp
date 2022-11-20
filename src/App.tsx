import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [id, setID] = useState("");
  const [name, setName] = useState("");

  const onChangeID = (e: any) => {
    setID(e);
  };

  const onChangeName = (e: any) => {
    setName(e.value);
  };

  // main.js

  // POST request using fetch()

  const callBack = async () => {
    try {
      const url = "http://localhost:8080/addproducts";
      await fetch(url, {
        // Adding method type
        method: "POST",

        // Adding body or contents to send
        body: JSON.stringify({
          title: "foo",
          body: { id: id, name: name },
          userId: 1,
        }),

        // Adding headers to the request
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        // Converting to JSON
        .then((response) => response.json())

        // Displaying results to console
        .then((json) => console.log(json));
    } catch (e) {
      alert(e);
    }
    // finally {
    //   alert();
    // }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input
          className="textInput"
          onChange={(e) => setID(e.target.value)}
          value={id}
          type="text"
          placeholder="enter id"
        />
        <input
          className="textInput"
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="enter name"
        />
        <button onClick={callBack} className="button">
          submit
        </button>
      </header>
    </div>
  );
}

export default App;
