import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Write from './page/Write'
import {BrowserRouter as Router,
    Routes,
    Route,
    Link,

} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Routes>
            <Route path={'/'} element={<App />}></Route>
            <Route path={'/write'} element={<Write />}></Route>
        </Routes>
    </Router>
);