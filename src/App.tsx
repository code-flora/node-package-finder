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
  const [query, setQuery] = useState<null | string>(null);
  const [querySubmitted, setQuerySubmitted] = useState<string | null>(null);

  // for results after returned from API
  const [searchResults, setSearchResults] = useState<null | {}>(null);

  // for specific package after returned from API
  const [packageInfo, setPackageInfo] = useState<null | {}>(null);

  const bundle = { query, setQuery, querySubmitted, setQuerySubmitted, searchResults, setSearchResults, packageInfo, setPackageInfo }

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
