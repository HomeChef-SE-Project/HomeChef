import React, { Component } from "react";

class OrderPlaced extends Component {
    state = {};
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <h2>
                    <br />
                    <strong>
                        Order placed sucessfully! <br /> Sit back and relax
                        while we deliver your order!
                    </strong>
                </h2>
                <br />
                <br />
                <br />
                <a href={`/user/${localStorage.getItem('userid')}`}>Back to HomeScreen</a>
            </div>
        );
    }
}

export default OrderPlaced;
