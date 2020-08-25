import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Tasks } from "./Tasks";
import { Tasklists } from "./Tasklists";

import { Button } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <Tasks />
      <Tasklists />
      <button>This is simple Button</button>
      <Button>This is Semantic Button </Button>
    </div>
  );
}

export default App;
