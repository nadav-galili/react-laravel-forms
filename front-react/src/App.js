import "./App.css";
import React from "react";
import Navbar from "./components/navbar";
import DataTable from "./components/form-list/dataTable";
import Wizard from "./components/form-builder/wizard";
import { Switch, Route } from "react-router-dom";


const style = {
  minHeight: 900,
};

function App() {
  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <main style={style}>
        <section>
          <Switch>
            <Route path="/form-builder" component={Wizard}/> 
          <Route path="/" exact component={DataTable} />
          </Switch>
        </section>
      </main>
    </React.Fragment>
  );
}

export default App;
