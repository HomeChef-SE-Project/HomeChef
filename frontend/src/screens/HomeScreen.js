import React from "react";
import { Row, Col } from "react-bootstrap";
import Chef from "../components/Chef";
import chefs from "../chefs";

const HomeScreen = () => {
    return (
        <div>
            <h1>Homemakers near you</h1>
            <Row>
                {chefs.map((chef) => (
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <Chef key={chef.id} chef={chef} />
                    </Col>
                ))}
                l
            </Row>
        </div>
    );
};

export default HomeScreen;
