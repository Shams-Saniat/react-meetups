import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FavouritesContextProvider } from './store/favourite-context.jsx';
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
    <FavouritesContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </FavouritesContextProvider>

)
