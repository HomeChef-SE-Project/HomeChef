import React, { Component } from "react";
import Zoom from "react-reveal/Fade";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "./App.css";

class Display extends Component {
    state = {
        fade: false,
        welcome: true,
    };

    fader = () => {
        this.setState({ fade: true });
        const timer = setTimeout(() => this.setState({ fade: false }), 3000);
        return () => clearTimeout(timer);
    };
    exitwelcome = () => {
        this.setState({ welcome: true });
        const timer = setTimeout(() => this.setState({ welcome: false }), 4200);
        return () => clearTimeout(timer);
    };

    componentDidMount() {
        this.fader();
        this.exitwelcome();
    }

    welcome = () => {
        return (
            <div>
                <Zoom center opposite when={this.state.fade}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            alignSelf: "center",
                        }}
                    >
                        <img
                            src={"images/logo-HomeChef2.png"}
                            height="50%"
                            width="50%"
                            alt="logo of the company"
                        />
                    </div>
                </Zoom>
            </div>
        );
    };
    example = () => {
        return (
            // <div
            //     style={{
            //         backgroundImage: "url(/images/praneetha.jpg)",
            //         flex: 1,
            //     }}
            // >
            <Zoom center>
                <div
                    style={{
                        height: "96vh",
                        backgroundImage: "url(/images/welcome-bg.jpg)",
                    }}
                >
                    <Header />
                    {/* <img src="/images/welcome-bg-resized.png" /> */}
                    <div>
                        <Container>
                            <Row>
                                <Col className="text-center py-3">
                                    <motion.div
                                        initial={{
                                            scale: 0.25,
                                            opacity: 0,
                                        }}
                                        animate={{
                                            scale: 1,
                                            opacity: 1,
                                        }}
                                        transition={{
                                            delay: 0.5,
                                            duration: 1.5,
                                        }}
                                    >
                                        <h1>Welcome To HomeChef</h1>
                                    </motion.div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <Footer />
            </Zoom>
            // </div>
        );
    };
    render() {
        return this.state.welcome ? this.welcome() : this.example();
    }
}

export default Display;
