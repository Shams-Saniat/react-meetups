import { Route, Routes } from "react-router"
import AllMeetupsPage from "./pages/AllMeetups"
import NewMeetupPage from "./pages/NewMeetups"
import FavouritesPage from "./pages/Favourites"
import Layout from "./components/layout/Layout"


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path='/favourites' element={<FavouritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App
