import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./navbar";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Wizard from "./wizardBuilder/wizard";
import DataTable from "./form-list/dataTable";
// import FormSubmit from "./form-submit/formSubmit";
import SubmitForm from './form-submit/submitForms'

const style = {
    minHeight: 900,
};
function App() {
    return (
        <div className="App">
            <Router>
                <header>
                    <Navbar />
                </header>
                <main style={style}>
                    <section>
                        <Switch>
                            <Route path="/form-builder" component={Wizard} />
                            <Route path="/submit/:id" component={SubmitForm} />
                            <Route path="/" exact component={DataTable} />
                        </Switch>
                    </section>
                </main>
            </Router>
        </div>
    );
}

export default App;

// DOM element
if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
