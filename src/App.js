import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './style.css';

import Toast from './components/Toast';
import ToastWithTimeout from './components/ToastWithTimeout';
import ToastWithIcon from './components/ToastWithIcon';
import ToastCentered from './components/ToastCentered';

export default function App() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">Default</Link>
        <Link to="/timeout">With Timeout</Link>
        <Link to="/withicon">With Icon</Link>
        <Link to="/centered">Centered</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Toast />} />
        <Route path="/timeout" element={<ToastWithTimeout />} />
        <Route path="/withicon" element={<ToastWithIcon />} />
        <Route path="/centered" element={<ToastCentered />} />
      </Routes>
    </div>
  );
}
