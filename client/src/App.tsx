import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useRef } from 'react';
import './App.css';
import { Navbar } from './components/shared/Navbar/Navbar';
import Home from '../src/Pages/Home';
import About from '../src/Pages/About'
import ProductPost from './Pages/ProductPost'
import Profile from '../src/Pages/Profile'
import Login from '../src/Pages/Login';
import Signup from '../src/Pages/Signup'
import Footer from "./components/shared/Footer/Footer";
import { useAuthTokenStore, useLogin, useLogout}  from "./utils/auth";


// Including the useAuthTokenStore. //
// Including the useAuthTokenStore hook will allow your app to reauthenticate already logged in users if they refresh the page, or leave and return to the application. //
// The best place for this is inside your primary App component. //
// Ref. https://reactjs.org/docs/react-without-es6.html; and https://github.com/supercodingninja/mern-jwt-auth-setup#prerequisites forked from ac524/mern-jwt-auth-setup //
function App () {
  // Use the hook to reauthenticate stored tokens.
  useAuthTokenStore()

  /** Rest of your App component code here */
  // Reference https://jasonwatmore.com/post/2019/04/06/react-jwt-authentication-tutorial-example; and https://www.alibabacloud.com/blog/how-to-implement-authentication-in-reactjs-using-jwt_595820 //  
  return (
    <Router>
      <Navbar />

      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/post" component={ProductPost} />
          <Route exact path="/account" component={Profile} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
      </Switch>

      <Footer />      
    </Router>
  );
};

export default App;



