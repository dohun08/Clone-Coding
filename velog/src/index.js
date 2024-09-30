import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Write from './page/Write'
import Header from './components/Header'
import Content from './components/Contents'
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
        </Routes>
      </Layout>
    </Router>

);

function Layout({ children }) {
    const location = useLocation();
  
    return (
      <>
        {/* /write 경로에서는 Header를 제외하고 나머지 페이지에서는 Header 렌더 */}
        {location.pathname !== '/write' && <Header />}
        {children}
      </>
    );
  }