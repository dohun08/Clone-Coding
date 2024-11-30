import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Write from './page/Write/Write'
import Header from './components/Header'
import Content from './components/Contents'
import { Search } from './page/search';
import {BrowserRouter as Router,
    Routes,
    Route,
    useLocation,

} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/write" element={<Write />} />
          <Route path="/box/:id" element={<Content />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </Layout>
    </Router>

);

function Layout({ children }) {
    const location = useLocation();
  
    return (
      <>
        {location.pathname !== '/write' && <Header />}
        {children}
      </>
    );
  }