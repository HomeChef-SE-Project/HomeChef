import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/Header2";
import Menu from "./components/menu";
//import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
//import ChefScreen from "./screens/ChefScreen";

const User = () => {
    return (
        <Router>
            <Header />
            <main className="py-3">
                <Container>
                    <Route path="/" component={HomeScreen} exact />
                    <Route path="/user/:userid/menu" component={Menu} />
                </Container>
            </main>
        </Router>
    );
};

export default User;
