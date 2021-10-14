
import './App.css';
import React from 'react';
import Navbar from './components/navbar';
import DataTable from "./components/form-list/dataTable";
import Header from './components/common/header';
import main from "./sass/main.scss";

const style={
  minHeight:900
}

function App() {
  return (
    <React.Fragment>
     <header>
     <Navbar/>
     </header>
     <main style={style} >
      <section>
        <DataTable/>
      </section>
     </main>
     </React.Fragment>
  );
}

export default App;
