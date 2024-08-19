import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Course from './components/Course';
import Courses from './Courses/Courses';
import Signup from './components/Signup';

function App() {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
     
    </div>
  );
}

export default App;

