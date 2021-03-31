import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class AuthCallback extends Component {
    state = {
        userid: 0,
    };

    constructor(props) {
        super(props);
        axios.get("http://localhost:5000/return_details").then((res) => {
            console.log(res);
            this.setState({ userid: res.data.id });
        });
    }

    render() {
        // this.handleUserDetails();
        // console.log(this.state.userid);
        return (
            <div>
                <Redirect
                    to={{
                        pathname: "/user_details",
                        state: { userid: this.handleUserDetails },
                    }}
                />
            </div>
        );
        //return <p>Returned</p>;
    }
}

export default AuthCallback;

// {
//     headers: {
//         "Access-Control-Allow-Origin": "*",
//         "Content-Type": "application/x-www-form-urlencoded",
//     },
// }
