import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home/home.tsx'
import Pricing from './pages/pricing/pricing.tsx'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path={'/pricing'} element={<Pricing/>}/>
        </Routes>
    </BrowserRouter>
)
