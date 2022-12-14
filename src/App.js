import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import { ProductsContext, LoginContext } from "./Helper/Context";
import Cart from "./Pages/Cart/Cart";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Congrate from "./view/Congrate";
import Personalinfo from "./view/landingpage/logisticreg/Personalinfo";
import VehicleReg from "./view/landingpage/logisticreg/VehicleReg";
import Business from "./view/landingpage/signin/Business";
import EmailVari from "./view/landingpage/signin/EmaillVeri";
import Signin from "./view/landingpage/signin/Signin";
import Space from "./view/landingpage/storage/Space";
import StorageSignin from "./view/landingpage/storage/StorageSignin";
import Work from "./view/Work";
import { Checkout } from "./Pages/Checkout/Checkout";
import { CheckoutSuccess } from "./Pages/Checkout/Success";
import { Facilities } from "./Pages/Storage/StoragePage/Facilities";
import { StorageBooking } from "./Pages/Storage/Bookings/BookingForm";
import { BookingSuccess } from "./Pages/Storage/Bookings/Success/BookingSuccess";
import { LogisticsPage } from "./Pages/Logistics/Logistics";
import Login from "./view/landingpage/signin/Login";
import User from "./view/landingpage/signin/User";

// Dashboard
import Dashboard from "./Pages/dashboard/Dashboard";
import FarmernewProduct from "./Pages/dashboard/dashboardroutes/farmer/FarmerNewProduct";
import FarmerProduct from "./Pages/dashboard/dashboardroutes/farmer/FarmerProduct";
import FarmerTrans from "./Pages/dashboard/dashboardroutes/farmer/FarmerTrans";
import FarmerPage from "./Pages/dashboard/dashboardroutes/Farmerpage";
import Booking from "./Pages/dashboard/dashboardroutes/logistic/Booking";
import LogisticTrans from "./Pages/dashboard/dashboardroutes/logistic/LogisticTrans";
import LogisticPage from "./Pages/dashboard/dashboardroutes/LogisticPage";
import NotificationPage from "./Pages/dashboard/dashboardroutes/NotificationPage";
import Storagepage from "./Pages/dashboard/dashboardroutes/StoragePage";
import ServiceSetUp from './Pages/dashboard/dashboardroutes/ServiceSetUp';
import { Home } from "./Pages/dashboard/Home";
import Transaction from "./Pages/dashboard/dashboardroutes/Transaction";
import { useSelector } from "react-redux";
import Settings from "./Pages/dashboard/dashboardroutes/Settings";
import Details from "./Pages/dashboard/info/Details";
import ChangePassword from "./Pages/dashboard/info/ChangePassword";
import AddressPage from "./Pages/dashboard/info/AddressPage";
import Orders from "./Pages/dashboard/info/Orders";
import ActiveOrders from "./Pages/dashboard/info/ActiveOrders";
import CloseOrder from "./Pages/dashboard/info/CloseOrder";

function App() {
  const [products, setProducts] = useState([]);
  const [loggedIn, setLoggedIn] = useState(null);
  const [loggingIn, setLoggingIn] = useState(false);
  const [signingIn, setSigningIn] = useState(false);
  const [productFailed, setProductFailed] = useState(false);
  const [loading, setLoading] = useState(true);
  const { userInfo } = useSelector((state) => state);

  return (
    <BrowserRouter>
      <ProductsContext.Provider
        value={{
          products,
          setProducts,
          loading,
          setLoading,
          productFailed,
          setProductFailed,
        }}
      >
        <LoginContext.Provider
          value={{
            loggedIn,
            setLoggedIn,
            loggingIn,
            setLoggingIn,
            signingIn,
            setSigningIn,
          }}
        >
          <div className="App">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<User />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/business" element={<Business />} />
              <Route path="/emailvari" element={<EmailVari />} />
              <Route path="/congratulation" element={<Congrate />} />
              {/* <Route path="/service" element={<Service />} /> */}
              <Route path="/Vehiclereg" element={<VehicleReg />} />
              <Route path="/Personalinfo" element={<Personalinfo />} />
              <Route path="/storageSignin" element={<StorageSignin />} />
              <Route path="/space" element={<Space />} />
              <Route path="/work" element={<Work />} />

              <Route
                path="/dashboard"
                element={
                  userInfo ? (
                    <Dashboard />
                  ) : (
                    <Navigate
                      to="/login"
                      state={{ from: "/dashboard" }}
                      replace
                    />
                  )
                }
              >
                <Route path="" element={<Home />} />


                {/* Farmer routes */}
                <Route path="farmer" element={<FarmerPage />}>
                  <Route path="" element={<Transaction />} />
                  <Route path="farmerproduct" element={<FarmerProduct />} />
                  <Route
                    path="farmernewproduct"
                    element={<FarmernewProduct />}
                  />
                  <Route path="farmertrans" element={<FarmerTrans />} />
                </Route>

                {/* Logistics routes */}
                <Route path="logistic" element={<LogisticPage />}>
                  <Route path="bookings" element={<Booking />} />
                  <Route path="transaction" element={<LogisticTrans />} />
                </Route>

                <Route path="storage" element={<Storagepage />} />
                <Route path="settings" element={<Settings />} />

                <Route path="Details" element={<Details />} />
                <Route path="changepassword" element={<ChangePassword />} />
                <Route path="address" element={<AddressPage />} />
          
                <Route path="orders" element={<Orders />} >
                  <Route path="" element={<ActiveOrders />} />
                  <Route path="closeorder" element={<CloseOrder />} />
                </Route>


                <Route path="notifications" element={<NotificationPage />} />
              </Route>
              <Route path="/service" element={<ServiceSetUp />} />

              <Route path="/checkout" element={<Checkout />} />
              <Route path="/checkout/success" element={<CheckoutSuccess />} />
              <Route path="/storage-page" element={<Facilities />} />
              <Route
                path="/storage-page/booking"
                element={<StorageBooking />}
              />
              <Route
                path="/storage-page/booking/success"
                element={<BookingSuccess />}
              />
              <Route path="/logistics-page" element={<LogisticsPage />} />
            </Routes>
            {/* {state?.backgroundLocation &&
              <Routes>
              
            </Routes>
            } */}
          </div>
        </LoginContext.Provider>
      </ProductsContext.Provider>
    </BrowserRouter>
  );
}

export default App;
