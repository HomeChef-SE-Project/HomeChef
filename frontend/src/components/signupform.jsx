import React, { Component } from "react";
import { motion } from "framer-motion";
//import { Container, Row, Col } from "react-grid-system";
import { Form, Button, Container, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Signup extends Component {
	state = {};
	render() {
		return (
			<div style={{ border: "20px" }}>
				<Container>
					<Form>
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
											type="email"
											placeholder="Enter email"
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
										<Form.Control />
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
										<Form.Control />
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
								<Form.Control placeholder="1234 street ringroad Hyderabad" />
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
										<Form.Control type="number" />
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
										<Form.Control />
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
							<Button variant="primary" type="submit" href="/">
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
