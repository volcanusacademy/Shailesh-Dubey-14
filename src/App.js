import React from "react";
import { AuthProvider } from "./AuthContext";
import Person from "./Person";
import DeepNestedComponent from "./DeepNestedComponent";
import DataFetchingComponent from "./DataFetchingComponent";
import CounterComponent from "./CounterComponent";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



const App = () => {
  return (
    <AuthProvider>
        <div>
        <Person/>
      </div>
     
    
      <div className="Shailesh">
        <DataFetchingComponent />
      </div>

      <div className="Shailesh">
        <CounterComponent />
      </div>
      
      <div className="Shailesh">
        <h1>App</h1>
        <DeepNestedComponent />
      </div>

    

    </AuthProvider>
    
  );
};

export default App;
 