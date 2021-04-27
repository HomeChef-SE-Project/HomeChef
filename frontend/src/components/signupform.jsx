import React, { Component } from "react";
import { motion } from "framer-motion";
//import { Container, Row, Col } from "react-grid-system";
import { Form, Button, Container, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import backendUrl from "../deployment"

class Signup extends Component {
	
	state = {
		email: "",
		firstname: "",
		lastname: "",
		address: "",
		mobile: "",
		aadhar: ""
	}
	
	// constructor(props, context) {
    //     super(props, context);

    //     this.state = { description: '' };
    // }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

	postData = () => {
		console.log("Inside post")
		axios
		.post(`${backendUrl}/admin/add`, this.state)
		// .then((res) => {
		// 	console.log(res.data)
		// 	console.log('sending homemaker form');
		// 	// console.log('Submitted homemaker form');
		// 	// console.log(this.state);
		// 	alert("Your data has succesfully been sent for verification")
		// 	this.props.history.push(`/`);
		// });
		console.log('Submitted homemaker form');
		console.log('After axios post')
		alert("Your data has succesfully been sent for verification")
		this.props.history.push(`/`);
	}

    handleSubmit = (e) => {
        e.preventDefault();
		console.log('inside onsubmit')
		//console.log(this.state)
		this.postData();

        // fetch(this.props.formAction, {
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({description: this.state.description})
        // });

        //this.setState({description: ''});
    }
	render() {
		return (
			<div style={{ border: "20px" }}>
				<Container>
					<Form
					// action={`${backendUrl}/admin/add`}
                    // method={"post"}
                    onSubmit={this.handleSubmit}
					>
						<Form.Row>
							<Col>
								<motion.div
									initial={{
										scale: 0.25,
										opacity: 0,
										x: 100,
									}}
									animate={{
										scale: 1,
										opacity: 1,
										x: 0,
									}}
									transition={{
										delay: 0.25,
										duration: 1,
									}}
								>
									<Form.Group controlId="formBasicEmail">
										<Form.Label>Email address</Form.Label>
										<Form.Control
											name="email"
											type="email"
											placeholder="Enter email"
											value={this.state.email}
											onChange={this.onChange}
										/>
										<Form.Text className="text-muted">
											We'll never share your email with
											anyone else.
										</Form.Text>
									</Form.Group>
								</motion.div>
							</Col>
						</Form.Row>
						<Form.Row>
							<Col>
								<motion.div
									initial={{
										scale: 0.25,
										opacity: 0,
										x: 100,
									}}
									animate={{
										scale: 1,
										opacity: 1,
										x: 0,
									}}
									transition={{
										delay: 1,
										duration: 1,
									}}
								>
									<Form.Group
										as={Col}
										controlId="formFirstName"
									>
										<Form.Label>First Name</Form.Label>
										<Form.Control
											name="firstname" 
											value={this.state.firstname}
											onChange={this.onChange}
										/>
									</Form.Group>
								</motion.div>
							</Col>
							<Col>
								<motion.div
									initial={{
										scale: 0.25,
										opacity: 0,
										x: 100,
									}}
									animate={{
										scale: 1,
										opacity: 1,
										x: 0,
									}}
									transition={{
										delay: 1,
										duration: 1,
									}}
								>
									<Form.Group controlId="formLastName">
										<Form.Label>Last Name</Form.Label>
										<Form.Control 
											name="lastname"
											value={this.state.lastname}
											onChange={this.onChange}
										/>
									</Form.Group>
								</motion.div>
							</Col>
						</Form.Row>
						<motion.div
							initial={{
								scale: 0.25,
								opacity: 0,
								x: 100,
							}}
							animate={{
								scale: 1,
								opacity: 1,
								x: 0,
							}}
							transition={{
								delay: 1,
								duration: 1,
							}}
						>
							<Form.Group as={Col} controlId="formAddress">
								<Form.Label>Address</Form.Label>
								<Form.Control 
									name="address"
									placeholder="1234 street ringroad Hyderabad" 
									value={this.state.address}
									onChange={this.onChange}
								/>
							</Form.Group>
						</motion.div>
						<Form.Row>
							<Col>
								<motion.div
									initial={{
										scale: 0.25,
										opacity: 0,
										x: 100,
									}}
									animate={{
										scale: 1,
										opacity: 1,
										x: 0,
									}}
									transition={{
										delay: 1,
										duration: 1,
									}}
								>
									<Form.Group as={Col} controlId="formMobile">
										<Form.Label>Contact Number</Form.Label>
										<Form.Control
											name="mobile" 
											type="number"
											value={this.state.mobile}
											onChange={this.onChange}
										/>
									</Form.Group>
								</motion.div>
							</Col>
							<Col>
								<motion.div
									initial={{
										scale: 0.25,
										opacity: 0,
										x: 100,
									}}
									animate={{
										scale: 1,
										opacity: 1,
										x: 0,
									}}
									transition={{
										delay: 1,
										duration: 1,
									}}
								>
									<Form.Group controlId="formAadhar">
										<Form.Label>Aadhar Number</Form.Label>
										<Form.Control
											name="aadhar" 
											value={this.state.aadhar}
											onChange={this.onChange}
										/>
									</Form.Group>
								</motion.div>
							</Col>
						</Form.Row>

						<motion.div
							initial={{
								scale: 0.25,
								opacity: 0,
								x: 100,
							}}
							animate={{
								scale: 1,
								opacity: 1,
								x: 0,
							}}
							transition={{
								delay: 0.75,
								duration: 1,
							}}
						>
							<Form.Group as={Col} controlId="formHC">
								<Form.Label>
									Why did you choose HomeChef?
								</Form.Label>
								<Form.Control />
							</Form.Group>
						</motion.div>

						<motion.div
							initial={{
								scale: 0.25,
								opacity: 0,
								x: 100,
							}}
							animate={{
								scale: 1,
								opacity: 1,
								x: 0,
							}}
							transition={{
								delay: 0.75,
								duration: 1,
							}}
						>
							<Form.Group as={Col} controlId="formAddress">
								<Form.Label>What does Cooking mean to you?</Form.Label>
								<Form.Control placeholder="Write Something" />
							</Form.Group>
						</motion.div>

						<motion.div
							initial={{
								scale: 0.25,
								opacity: 0,
								x: 100,
							}}
							animate={{
								scale: 1,
								opacity: 1,
								x: 0,
							}}
							transition={{
								delay: 1,
								duration: 1,
							}}
						>
							<Button variant="primary" type="submit">
								Submit
							</Button>
						</motion.div>
					</Form>
				</Container>
			</div>
		);
	}
}
export default Signup;
