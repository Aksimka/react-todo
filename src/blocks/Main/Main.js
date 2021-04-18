import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import List from "./List/List";
import OneTask from "./OneTask/OneTask";
import AddTask from "./AddTask/AddTask";

export default function () {

  return (
    <div className="main">
      <Switch>
        <Route exact path="/">
          <List />
        </Route>
        <Route path="/add">
          <AddTask />
        </Route>
        <Route path={`/task/:id`}>
          <OneTask />
        </Route>
      </Switch>
    </div>
  )
}
