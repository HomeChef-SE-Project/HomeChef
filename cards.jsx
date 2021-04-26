//import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import OrderDetailsCard from "./card";

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			display: "flex",
			flexWrap: "wrap",
			backgroundColor: "#202040",
			minWidth: "100vh",
			minHeight: "100vh",
			justifyContent: "space-between",
			justifyItems: "left",
			padding: "0px",
			flexFlow: "row wrap ",
			//position: "relative",
		},
		indvCell: {
			boxSizing: "border-box",
			flex: "0 0 350px",
			margin: "3px",
			padding: "20px",
			borderRadius: "10px",
		},
	})
);

const OrderDetailsCards = () => {
	const classes = useStyles();
	
	
	return (
		<Grid container className={classes.root}>
		</Grid>
	);
};

export default OrderDetailCards;
