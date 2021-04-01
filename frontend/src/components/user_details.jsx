import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./user_details.css";

class UserDetails extends Component {
    state = {
        name: "",
        email: "",
        mobileNumber: "",
        address: "",
    };

    handleSubmit = (event) => {
        event.preventDefault();
        // console.log("Clicked");
        // console.log(this.state);
        axios
            .post("http://localhost:5000/user_details", this.state)
            .then((res) => {
                console.log("SENT");
                console.log(res.data);
                console.log(res);
            });
        this.redirect = true;
        console.log("userid", this.props.location.state.userid);
        this.props.history.push(`/user/${this.props.location.state.userid}`);
    };

    handleChange = (event) => {
        //text, email, number, textarea
        // console.log(event.target.name);
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        // if (this.redirect) return <Redirect to={`/user/${this.userid}`} />;
        // else
        console.log(this.props.location.state.userid);
        return (
            <div>
                <div className="container">
                    <h2 id="top-line"> Please fill in your details below </h2>
                    <div id="form-main">
                        <div id="form-div">
                            <form
                                className="montform"
                                id="reused_form"
                                onSubmit={this.handleSubmit}
                            >
                                <p className="name">
                                    <input
                                        name="name"
                                        type="text"
                                        className="feedback-input"
                                        required
                                        placeholder="Name"
                                        id="name"
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                    />
                                </p>
                                <p className="email">
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        className="feedback-input"
                                        id="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                    />
                                </p>
                                <p className="phno">
                                    <input
                                        name="mobileNumber"
                                        type="number"
                                        required
                                        className="feedback-input"
                                        id="phno"
                                        placeholder="Phone Number"
                                        value={this.state.mobileNumber}
                                        onChange={this.handleChange}
                                    />
                                </p>
                                <p className="text">
                                    <textarea
                                        name="address"
                                        className="feedback-input"
                                        id="comment"
                                        placeholder="Address"
                                        value={this.state.address}
                                        onChange={this.handleChange}
                                    ></textarea>
                                </p>
                                <div className="submit">
                                    <button
                                        type="submit"
                                        className="button-blue"
                                    >
                                        SUBMIT
                                    </button>
                                    <div className="ease"></div>
                                </div>
                            </form>
                            <div
                                id="error_message"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    display: "none",
                                }}
                            >
                                <h4>Error</h4>
                                Sorry there was an error sending your details.
                            </div>
                            <div
                                id="success_message"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    display: "none",
                                }}
                            >
                                {" "}
                                <h2>
                                    Success! Your Details were registered
                                    Successfully.
                                </h2>{" "}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserDetails;

// {
//     /* <head>
//         <meta charSet="utf-8" />
//         <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//         <meta
//             name="viewport"
//             content="width=device-width, initial-scale=1"
//         ></meta>
//         <title>
//             Contact Form HTML/CSS Template - reusable form
//         </title>
//         <script
//             src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"
//             integrity=" sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
//         ></script>
//         <link
//             href="https://fonts.googleapis.com/css?family=Montserrat"
//             rel="stylesheet"
//         />
//         <link
//             rel="stylesheet"
//             href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
//         />
//         <link rel="stylesheet" href="user_details.css" />
//         <script src="form.js"></script>
//     </head> */
// } <
