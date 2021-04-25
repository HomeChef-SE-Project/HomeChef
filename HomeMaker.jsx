import React from 'react'
import { makeStyles, Theme, createStyles , withStyles} from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import OrderCard from "./ordercard";
import orders from "../orders";

const WhiteTextTypography = withStyles({
	root: {
		color: "#FFFFFF",
		opacity: 0.8,
	},
})(Typography);


const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			display: "flex",
			flexWrap: "wrap",
			backgroundColor: "#202040",
			minWidth: "200vh",
			minHeight: "100vh",
			justifyContent: "space-between",
			justifyItems: "left",
			padding: "30px",
			flexFlow: "row wrap ",
			position: "relative",
		},
		indvCell: {
			boxSizing: "border-box",
			flex: "0 0 350px",
			margin: "3px",
			padding: "2px",
			borderRadius: "10px",
		},
	})
);

const HomeMaker = () => {
    const classes = useStyles();
    
    const listorders = orders.map((c) => (
        <Grid item className={classes.indvCell}>
            <OrderCard
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
			<Grid item md={12}>
			<WhiteTextTypography align="center" variant = "h4" pading="20px">
				Pending Orders
			</WhiteTextTypography> 
			</Grid>
            {listorders}
		</Grid>
	);
};

export default HomeMaker
