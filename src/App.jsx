import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import HomePage from "./pages/HomePage"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import CreateListing from "./pages/CreateListing"
import ListingDetails from "./components/ListingDetails"
import TripList from "./pages/TripList"
import WishList from "./pages/WishList"
import PropertyList from "./pages/PropertyList";
import ReservationList from "./pages/ReservationList";
import CategoryPage from "./pages/CategoryPages";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div>
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<HomePage/>}/>
          <Route path="/register" element = {<RegisterPage/>}/>
          <Route path="/login" element = {<LoginPage/>}/>
          <Route path="/create-listing" element = {<CreateListing/>}/>
          <Route path="/properties/:listingId" element = {<ListingDetails/>}/>
          <Route path="/:userId/trips" element = {<TripList/>}/>
          <Route path="/:userId/wishList" element = {<WishList/>}/>
          <Route path="/:userId/properties" element={<PropertyList />} />
          <Route path="/:userId/reservations" element={<ReservationList />} />
          <Route path="/properties/category/:category" element={<CategoryPage />} />
          <Route path="/properties/search/:search" element={<SearchPage />} />

        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
