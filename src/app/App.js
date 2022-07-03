import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./layouts/main";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/:modelId?" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
