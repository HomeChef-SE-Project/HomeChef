import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import backendUrl from "../deployment"

class AuthCallback extends Component {
    state = {
        userid: 0,
        user_bool : true,
        isLoading: true,
        usertype: 2
    };

    componentDidMount() {
        console.log("Authcalback_didmount");

        axios.get(`${backendUrl}/return_details`).then((res) => {
            console.log(res);
            console.log("Authcalback_post");
            console.log(res.data.usertype)
            this.setState({ userid: res.data.googleObject.id, isLoading: false , user_bool:res.data.firstLog, usertype: res.data.usertype});
        });

        // axios.get(`${backendUrl}/homemakers/${this.state.userid}`).then((req, res)=>{
        //     console.log('worked for homemakers')
        //     console.log(res)
        //     if(res!=null) this.setState({usertype: 1});
        // });
        // axios.get(`${backendUrl}/admin/${this.state.userid}/profile`).then((res) => {
        //     console.log('worked for admin')
        //     if(res!=null) this.setState({usertype: 0});
        // });
        // axios.get(`${backendUrl}/delivery/${this.state.userid}/profile`).then((req, res)=>{
        //     console.log('worked for delivery')
        //     if(res!=null) this.setState({usertype: 3});
        // });
    }

    render() {
        if (this.state.isLoading) {
            return <p>Loading...</p>;
        } else {
            var path = null;
            //console.log(this.state.user_bool)
            console.log(this.state.usertype);
            switch(this.state.usertype)
            {
                case 0:
                    path = `/admin/${this.state.userid}`
                    break;
                case 1:
                    path = `/homechef/${this.state.userid}`
                    break;
                case 3:
                    path = `/agent/${this.state.userid}`
                    break;
                case 2:
                    if(this.state.user_bool === false)
                    {
                        path = `/user/${this.state.userid}`
                    }
                    else{
                        path = "/user_details";
                    }
                    break;
                default:
                    console.log("Invalid User Type");
                    path = `/`;
            }
            //return <p>qwqw</p>
            return (
                <div>
                    {localStorage.setItem('userid', this.state.userid)}
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
