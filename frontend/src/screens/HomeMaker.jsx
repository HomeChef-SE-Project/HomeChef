import React from 'react'
import { makeStyles, Theme, createStyles , withStyles} from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import OrderCard from "./ordercard";
import Header from "../components/Header4";
import axios from "axios";
import backendUrl from "../deployment";

const WhiteTextTypography = withStyles({
	root: {
		color: "#dark",
		opacity: 0.8,
	},
})(Typography);


const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			display: "flex",
			flexWrap: "wrap",
			backgroundColor: "#FFFFFF",
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
	const [isLoading, setLoading] = React.useState(true);
    const classes = useStyles();
	const [listorders, update] = React.useState([]);
	// const [accepted, accupdate] = React.useState([]);

	// const handleDelete = (id) => {
	// 	update(listorders.filter((ls)=>ls.itemid!==id))
	// }

	// const handleAccept = (id) => {
		
	// 	accupdate(accepted.concat(listorders.filter((ls)=>ls.id===id)));
	// 	localStorage.setItem('accorders', accepted);
	// 	update(listorders.filter((ls)=>ls.itemid!==id))
	// }

	React.useEffect(()=>{
		let listorders1 = [];
		//let isLoading = true;
		axios.get(`${backendUrl}/homemakers/${localStorage.getItem('userid')}`).then((res) => {
			//console.log(res);
			console.log("Homemakers landing page");
			console.log("res.data = ")
			console.log(res)
			//this.setState({ userid: res.data.id, isLoading: false });
			
			//let orders = res.data;  // 
			console.log("orders list presenting below:");
			console.log(res.data[0].items[0]);
			listorders1 = res.data[0].items.map((c) => (
				<Grid item className={classes.indvCell}>
					<OrderCard
					//imgsrc={c.items.imgsrc}
					id={c.itemid}
					title={c.name}
					price={c.price}
					descr={c.description}
					//rating={c.rating}
					bg="../images/gen_img.jpg"
						// onAccept = {handleAccept}
						// onReject = {handleDelete}
					/>
				</Grid>
			));
			update(listorders1);
			setLoading(false);
		});
    },[])
    
    
    if (isLoading) return <p>Loading...</p>
	else
	{
	return (
		<div>
		<Header />
		<Grid container className={classes.root}>
			<Grid item md={12}>
			<WhiteTextTypography align="center" variant = "h4" pading="20px">
				Pending Orders
			</WhiteTextTypography> 
			</Grid>
            {listorders}
		</Grid>
		</div>
	);
	}
};

export default HomeMaker
