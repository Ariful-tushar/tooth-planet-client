import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Shared/Header/Header";
import Booking from "./components/Booking/Booking";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import ContactUs from "./components/ContactUs/ContactUs";

import About from "./components/About/About";
import Register from "./components/Login/Register/Register";
import Login from "./components/Login/Login/Login";
import Footer from "./components/Shared/Footer/Footer";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/contact">
              <ContactUs></ContactUs>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>

            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
