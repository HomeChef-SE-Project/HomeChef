import React from 'react';
//import {Row, Col} from 'react-bootstrap'
import Chef from '../components/Chef';
import chefs from '../chefs';
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import HomeMakerCard from "./card";

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
const HomeScreen = () => {
    const classes = useStyles();
    const lisitems = chefs.map((c) => (
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
            {lisitems}
        </Grid>
    );
};

// const HomeScreen = () => {
//     return (
//         <>
//             <h1>Chef's near you</h1>
//             <Row>
//                 {chefs.map(chef => (
//                     <Col sm={12} md={6} lg={4} xl={3}>
//                         <Chef chef={chef} />
//                     </Col>
//                 ))}l
//             </Row>
//         </>
//     )

export default HomeScreen