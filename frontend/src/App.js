//import logo from './logo.svg';
import "./App.css";
import Menu from "./components/menu";
import { Route, Link } from "react-router-dom";
import Checkout from "./components/checkout";
import User from "./User";
import HomeScreen from "./screens/HomeScreen";
//import ChefScreen from "./screens/ChefScreen";
import Display from "./Display";
import OrderPlaced from "./components/orderplaced";
import Signup from "./components/signupform";
import UserDetails from "./components/user_details";
import AuthCallback from "./components/authcallback";

function App() {
    return (
        <div>
            <Route path="/user/:userid/checkout" component={Checkout} />
            <Route path="/unreachable" component={User} />
            <Route path="/user/:userid" component={HomeScreen} exact />
            <Route exact path="/" component={Display} />
            <Route path="/user/orderplaced" component={OrderPlaced} />
            <Route path="/user/:userid/menu" component={Menu} />
            <Route exact path="/homechef_register" component={Signup} />
            <Route exact path="/user_details" component={UserDetails} />
            <Route exact path="/return" component={AuthCallback} />
            {/* <Link to="/user/1923461238795">HomeScreen</Link>
            <Link to="/user/1923461238795/menu">Menu</Link>
            <Link to="/unreachable">User</Link>
            <Link to="/">HomePage</Link> */}
        </div>
        // <Display />
    );
}

export default App;
