//import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import HomeMakerCard from "./card";
import Header from "./Header2";

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
			padding: "20px",
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

const HomeMakerCards = () => {
	const classes = useStyles();
	const card = [
		{
			imgsrc: "./logos/popngo.png",
			title: "pop 'n' go",
			subtitle: "Get a Drink, Add some memories",
			descr:
				"pop 'n' go is a one of its kind Soft drink chain in Hyderabad with a Deep Vision",
			rating: 4.3,
			bg: "./bg/pop.jpg",
		},
		{
			imgsrc: "./logos/starbucks.jpg",
			title: "Starbucks",
			subtitle: "To inspire and nurture the human spirit",
			descr: "StarBucks Hyderabad- We supply the best quality coffee",
			rating: 3.8,
			bg: "./bg/starb.jpg",
		},
		{
			imgsrc: "./logos/bluered.png",
			title: "Blue-Red",
			subtitle: "Get on, Have some SeaFood",
			descr:
				"Want to have some SeaFood, Search no more, We're here to serve you",
			rating: 4.6,
			bg: "./bg/br.jpg",
		},
		{
			imgsrc: "./logos/as.jpg",
			title: "AS",
			subtitle: "Usual items in an Unusual way",
			descr:
				"Bored of the routine food, Hop on, Theres nothing usual here",
			rating: "3.9",
			bg: "./bg/asbg.jpeg",
		},
	];
	const lisitems = card.map((c) => (
		<Grid item className={classes.indvCell}>
			<HomeMakerCard
				imgsrc={c.imgsrc}
				title={c.title}
				subtitle={c.subtitle}
				descr={c.descr}
				rating={c.rating}
				bg={c.bg}
			/>
		</Grid>
	));
	return (
		<Grid container className={classes.root}>
			<Header />
			{lisitems}
		</Grid>
	);
};

export default HomeMakerCards;
