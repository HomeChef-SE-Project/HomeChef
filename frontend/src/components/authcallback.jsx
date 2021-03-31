import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class AuthCallback extends Component {
    state = {
        userid: 0,
    };

    componentDidMount() {
        axios.get("http://localhost:5000/return_details").then((res) => {
            console.log(res);
            this.state.userid = res.data;
        });
    }
    render() {
        return (
            <Redirect
                to={{
                    pathname: "/user_details",
                    state: { userid: this.state.userid },
                }}
            />
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
