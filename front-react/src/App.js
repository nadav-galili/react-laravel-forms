import "./App.css";
import React from "react";
import Navbar from "./components/navbar";
import DataTable from "./components/form-list/dataTable";
// import Wizard from "./components/form-builder/wizard";
import { Switch, Route } from "react-router-dom";
// import FormBuilder from "./components/form-builder/formBuilder";
// import Builder from "./components/wizard/builder";
import Wizard from "./components/wizard/wizard";
import FormBuilder from "./components/wizard/formBuilder";

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
            <Route path="/form-builder" component={FormBuilder} />
            <Route path="/" exact component={DataTable} />
          </Switch>
        </section>
      </main>
    </React.Fragment>
  );
}

export default App;
