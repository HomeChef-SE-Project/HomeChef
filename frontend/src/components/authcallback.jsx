import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import backendUrl from "../deployment"

class AuthCallback extends Component {
    state = {
        userid: 0,
        user_bool : true,
        isLoading: true,
    };

    componentDidMount() {
        console.log("Authcalback_didmount");

        axios.get(`${backendUrl}/return_details`).then((res) => {
            console.log(res);
            console.log("Authcalback_post");
            this.setState({ userid: res.data.googleObject.id, isLoading: false , user_bool:res.data.firstLog });
        });
    }

    render() {
        if (this.state.isLoading) {
            return <p>Loading...</p>;
        } else {
            var path = null;
            console.log(this.state.user_bool)
            if(this.state.user_bool === false)
            {
                path = `/user/${this.state.userid}`
            }
            else{
                path = "/user_details";
            }
            return (
                <div>
                {}
                    <Redirect
                        to={{
                            pathname: path ,
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
