import React, { useState } from 'react';
import './App.css';
import Home from './views/Home/Home';
import Results from './views/Results/Results'
import Package from './views/Package/Package'
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  //Set up states
  // for query, to be shared with Results and Package
  const [query, setQuery] = useState<null | string>(null);
  const [querySubmitted, setQuerySubmitted] = useState<string | null>(null);

  // for results after returned from API
  const [searchResults, setSearchResults] = useState<null | string>(null);

  // for specific package after returned from API
  const [packageInfo, setPackageInfo] = useState<null | string>(null);

  const bundle = { query, setQuery, querySubmitted, setQuerySubmitted, searchResults, setSearchResults, packageInfo, setPackageInfo }

  return (
    <div className="App">
      <BrowserRouter>
        <Home bundle={bundle} />
        <Routes>
          <Route path="/" element={null} />
          <Route path="search" element={<Results bundle={bundle} />} />
          <Route path="package/:id" element={<Package bundle={bundle} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
