import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Write from './page/Write'
import Header from './components/Header'
import Content from './components/Contents'
import {BrowserRouter as Router,
    Routes,
    Route,

} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/write" element={<Write />} />
            <Route path="/box/:id" element={<Content />} />
        </Routes>
    </Router>

);