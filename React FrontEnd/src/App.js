import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AllPosts from "./components/AllPosts";
import Create from "./components/Create";
import Edit from "./components/Edit";

const App = () => {
  const [searchKeyword, setSearchKeyword] = useState(''); // State to store the search keyword

  return (
    <Router>
      <div>
        {/* Navbar with search functionality */}
        <Navbar setSearchKeyword={setSearchKeyword} />

        {/* Routes for different components */}
        <Routes>
          {/* Home route with AllPosts that filters based on searchKeyword */}
          <Route path="/" element={<AllPosts searchKeyword={searchKeyword} />} />

          {/* Route to create a new post */}
          <Route path="/create" element={<Create />} />

          {/* Route to edit an existing post */}
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
