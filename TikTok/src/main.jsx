import { createRoot } from 'react-dom/client'
import Main from './pages/main';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />} />
        </Routes>
    </BrowserRouter>
)
