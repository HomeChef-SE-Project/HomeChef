//import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Menu from "./components/menu";
import Checkout from "./components/checkout";
import User from "./User";
import HomeScreen from "./screens/HomeScreen";
//import ChefScreen from "./screens/ChefScreen";
import Display from "./Display";
import OrderPlaced from "./components/orderplaced";
import Signup from "./components/signupform";
import UserDetails from "./components/user_details";
import AuthCallback from "./components/authcallback";
import HomeMaker from "./screens/HomeMaker";
import delboy from "./screens/delboy";
import CollapsibleTable from "./screens/adminAccept";
import AcceptedOrders from "./screens/AcceptedOrders";

function App() {
    return (
        <div>
            <Route path="/user/:userid/checkout" component={Checkout} />
            <Route path="/unreachable" component={User} />
            <Route path="/user/:userid" component={HomeScreen} exact />
            <Route exact path="/" component={Display} />
            <Route path="/user/:userid/orderplaced" component={OrderPlaced} exact/>
            <Route path="/user/:userid/menu" component={Menu} />
            <Route exact path="/homechef_register" component={Signup} />
            <Route exact path="/user_details" component={UserDetails} />
            <Route exact path="/return" component={AuthCallback} />
            <Route path="/homechef/:homechefid" component={HomeMaker} exact />
            <Route path="/agent/:agentid" component={delboy} exact />
            <Route path="/admin/:adminid" component={CollapsibleTable} exact />
            <Route path="/Accepted_Orders" component={AcceptedOrders} exact />
            {/*<Route path="/My_Menu" component={MyMenu} exact />*/}
            {/* <Link to="/user/1923461238795">HomeScreen</Link>
            <Link to="/user/1923461238795/menu">Menu</Link>
            <Link to="/unreachable">User</Link>
            <Link to="/">HomePage</Link> */}
        </div>
        // <Display />
    );
}

export default App;
