import React from 'react'
import { makeStyles, Theme, createStyles , withStyles} from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import MenuCard from "./MenuCard";
import menu from "../mymenu";
import Header from "../components/Header4";

const WhiteTextTypography = withStyles({
	root: {
		color: "dark",
		opacity: 0.8,
	},
})(Typography);


const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			display: "flex",
			flexWrap: "wrap",
			backgroundColor: "FFFFFF",
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

const MyMenu = () => {
    const classes = useStyles();
    
    const listmenu = menu.map((c) => (
        <Grid item className={classes.indvCell}>
            <MenuCard
            title={c.title}
            bg={c.bg}
			price={c.price}
			descr={c.descr}
            />
        </Grid>
    ));
    return (
		<div>
		<Header />
		<Grid container className={classes.root}>
			<Grid item md={12}>
			<WhiteTextTypography align="center" variant = "h4" pading="20px">
				Current Menu
			</WhiteTextTypography> 
			</Grid>
            {listmenu}
		</Grid>
		</div>
	);
};

export default MyMenu
