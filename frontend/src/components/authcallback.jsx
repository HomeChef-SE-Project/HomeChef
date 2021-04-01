import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class AuthCallback extends Component {
    state = {
        userid: 0,
        isLoading: true,
    };

    componentDidMount() {
        console.log("Authcalback_didmount");

        axios.get("http://localhost:5000/return_details").then((res) => {
            console.log(res);
            console.log("Authcalback_post");
            this.setState({ userid: res.data.id, isLoading: false });
        });
    }

    render() {
        if (this.state.isLoading) {
            return <p>Loading...</p>;
        } else {
            return (
                <div>
                    <Redirect
                        to={{
                            pathname: "/user_details",
                            state: { userid: this.state.userid },
                        }}
                    />
                </div>
            );
        }
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
