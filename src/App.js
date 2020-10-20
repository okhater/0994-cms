import React from 'react';
import './App.css';
import {Menu} from "./components/Menu";
import BrowserRouter from "react-router-dom/modules/BrowserRouter";

function App() {
  return (
      <div className="container-fluid">
          <BrowserRouter>
              <div className="row">
                  <Menu/>
                  <div className="col-9">

                  </div>
              </div>
          </BrowserRouter>
      </div>

  );
}

export default App;
