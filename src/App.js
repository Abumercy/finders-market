import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { CartItemContext } from "./Helper/Context";
import Cart from "./Pages/Cart/Cart";
import FormExample from "./Pages/Examples/FormExample";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Congrate from "./view/Congrate";
import Farmer from "./view/dashboard/Farmer";
import Notification from "./view/dashboard/Notification";
import Personalinfo from "./view/landingpage/logisticreg/Personalinfo";
import VehicleReg from "./view/landingpage/logisticreg/VehicleReg";
import Service from "./view/landingpage/Service";
import Business from "./view/landingpage/signin/Business";
import EmailVari from "./view/landingpage/signin/EmaillVeri";
import Login from "./view/landingpage/signin/Login";
import Signin from "./view/landingpage/signin/Signin";
import User from "./view/landingpage/signin/User";
import Space from "./view/landingpage/storage/Space";
import StorageSignin from "./view/landingpage/storage/StorageSignin";
import Work from "./view/Work";
import Dashboard from "./components/dashboard/Dashboard";
import Wallet from "./components/dashboard/Wallet";
import Dashboardsidebar from "./components/Dashboardsidebar";
import BookingForm from "./view/BookingForm";

function App() {
  const [cartItem, setCartItem] = useState(1)
  return (
    <BrowserRouter>
      <CartItemContext.Provider value={{cartItem, setCartItem}}>
          <div className="App">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/form" element={<FormExample />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/business" element={<Business />} />
              <Route path="/emailvari" element={<EmailVari />} />
              <Route path="/congratulation" element={<Congrate />} />
              <Route path="/service" element={<Service />} />
              <Route path="/Vehiclereg" element={<VehicleReg />} />
              <Route path="/Personalinfo" element={<Personalinfo />} />
              <Route path="/storageSignin" element={<StorageSignin />} />
              <Route path="/space" element={<Space />} />
              <Route path="/work" element={<Work />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/farmer" element={<Farmer />} />
              <Route path="/booking" element={<BookingForm />} />
              <Route path="/Usersignin" element={<User />} />
            </Routes>
          </div>
      </CartItemContext.Provider>
    </BrowserRouter>
  );
}

export default App;
