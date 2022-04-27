import { useState } from 'react';
import './App.css';
import Home from './views/Home/Home';
import Results from './views/Results/Results'
import Package from './views/Package/Package'
import { StateContext } from './context/stateContext';
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  //Set up states
  // for query, to be shared with Results and Package
  const [query, setQuery] = useState<string>("");
  const [querySubmitted, setQuerySubmitted] = useState<string>("");

  // for specific package after returned from API
  const [packageInfo, setPackageInfo] = useState<{}>({});

  const bundle = { query, setQuery, querySubmitted, setQuerySubmitted, packageInfo, setPackageInfo }

  return (
    <div className="App">
      <StateContext.Provider value={bundle}>
        <BrowserRouter >
          <Home />
          <Routes>
            <Route path="/" element={null} />
            <Route path="search" element={<Results />} />
            <Route path="package/:packageName/:version" element={<Package />} />
            <Route path="package/:packageParent/:packageName/:version" element={<Package />} />
          </Routes>
        </BrowserRouter>
      </StateContext.Provider>
    </div>
  );
}

export default App;
