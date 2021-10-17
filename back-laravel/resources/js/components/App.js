import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./navbar";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
  import Wizard from "./wizardBuilder/wizard";
import DataTable from "./form-list/dataTable";

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
                            <Route path="/" exact component={DataTable} />
                        </Switch>
                    </section>
                </main>
            </Router>
        </div>

        //    <React.Fragment>

        // {/* //     <main style={style}>
        // //       <section>
        // //         <Switch>
        // //           <Route path="/form-builder" component={Wizard} />
        // //           <Route path="/" exact component={DataTable} />
        // //         </Switch>
        // //       </section>
        // </main> */}
        //  </React.Fragment>

        //  <div className="container mt-5">
        //     <div className="row justify-content-center">
        //         <div className="col-md-8">
        //             <div className="card text-center">
        //                 <div className="card-header">
        //                     <h2> Laravel</h2>
        //                 </div>

        //                 <div className="card-body">
        //                     I'm tiny React component in Laravel app!
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}

export default App;

// DOM element
if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
