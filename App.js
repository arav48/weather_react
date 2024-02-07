// App.js or your route configuration file
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import WeatherApp from './components/WeatherApp';
import WeatherCard from './components/WeatherCard';
import LocationSelector from './components/LocationSelector';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign" element={<Signup />} />
        <Route path="/home" element={<WeatherApp />} />
        <Route path="/home" element={<WeatherCard/>} />
        <Route path="/home" element={<LocationSelector />} />
      </Routes>
    </Router>
  );
};

export default App;