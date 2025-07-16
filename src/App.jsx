import { Route, Routes } from "react-router"
import AllMeetupsPage from "./pages/AllMeetups"
import NewMeetupPage from "./pages/NewMeetups"
import FavouritesPage from "./pages/Favourites"

function App() {

  return <div>
    <Routes>
      <Route path="/" element={<AllMeetupsPage />} />
      <Route path="/new-meetup" element={<NewMeetupPage />} />
      <Route path='/favorites' element={<FavouritesPage />} />
    </Routes>
  </div>
}

export default App
