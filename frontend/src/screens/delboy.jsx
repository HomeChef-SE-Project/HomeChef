import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import { Grid } from "@material-ui/core";

import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { Done, Close } from "@material-ui/icons";

const useRowStyles = makeStyles({
	root: {
		"& > *": {
			borderBottom: "unset",
			backgroundColor: "#202060",
			boxShadow: "0 20px 100px -12px rgba(0,0,0,0.8)",
			//borderCollapse: "separate",
			//borderSpacing: " 0 10px",
			minHeight: "100vh",
		},
	},
	table: {
		backgroundColor: "#202040",
		//mWidth: "100vh",
		minHeight: "100vh",
		borderCollapse: "separate",
		borderSpacing: " 0 10px",
	},
	row: {
		minWidth: "100%",
	},
	gr: {
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
});

const WhiteTextTypography = withStyles({
	root: {
		color: "#FFFFFF",
		opacity: 0.6,
	},
})(Typography);

function Row(props) {
	const { row } = props;
	const classes = useRowStyles();

	return (
		<React.Fragment>
			<TableRow>
				<TableCell component="th" scope="row">
					<WhiteTextTypography>{row.name}</WhiteTextTypography>
				</TableCell>
				<TableCell align="right">
					<WhiteTextTypography>{row.contact}</WhiteTextTypography>
				</TableCell>
				<TableCell align="right">
					<WhiteTextTypography>{row.HomeMaker}</WhiteTextTypography>
				</TableCell>
				<TableCell align="right">
					<WhiteTextTypography>{row.dest}</WhiteTextTypography>
				</TableCell>
				<TableCell align="right">
					<WhiteTextTypography>{row.order}</WhiteTextTypography>
				</TableCell>
				<TableCell align="right">
					<IconButton
						aria-label="Done"
						onClick={() => props.onApprove(row.id)}
					>
						<Done style={{ color: "green" }}></Done>
					</IconButton>
				</TableCell>
				<TableCell align="right">
					<IconButton
						aria-label="Close"
						onClick={() => props.onDecline(row.id)}
					>
						<Close style={{ color: "red" }} />
					</IconButton>
				</TableCell>
			</TableRow>
		</React.Fragment>
	);
}

const arr = [
	{
		id: 1234,
		name: "Ms.Sandhya",
		contact: 8328592676,
		HomeMaker: "Dynamic Foods",
		dest: "D.no: 4-42,Raod no.2, SR nagar",
		order: "Chicken Manchuria",
	},
	{
		id: 2345,
		name: "Ms.Durba",
		contact: 7654834657,
		HomeMaker: "StarBucks",
		dest: "D.no: 6-7-45,Raod no.7, aditya nagar",
		order: "Hyderabadi Chicken Biryani",
	},
	{
		id: 4567,
		name: "Mr.Abhinav",
		contact: 9775468673,
		HomeMaker: "LOhiths",
		dest: "D.no: 3-65-7,Raod no.10, Jubileehills",
		order: "Sambhar Rice",
	},
];

export default function DelBoy() {
	const classes = useRowStyles();
	const [rows, decline] = React.useState(arr);
	const [approved, approve] = React.useState([]);

	const handleDecline = (id) => {
		decline(rows.filter((r) => r.id !== id));
		console.log("delete called", id);
	};
	const handleApprove = (id) => {
		approve(approved.concat(rows.filter((r) => r.id === id)));
		decline(rows.filter((r) => r.id === id));
		///// href something to take to a new page.
	};

	return (
		<Grid conatiner className={classes.gr}>
			<WhiteTextTypography align="center" variant="h3" padding="10px">
				Pending Order Deliveries
			</WhiteTextTypography>

			<TableContainer component={Paper} className={classes.table}>
				<Table aria-label="collapsible table">
					<TableHead className={classes.root}>
						<TableRow>
							<TableCell>
								<WhiteTextTypography>Name</WhiteTextTypography>
							</TableCell>
							<TableCell align="right">
								<WhiteTextTypography>
									Contact
								</WhiteTextTypography>
							</TableCell>
							<TableCell align="right">
								<WhiteTextTypography>
									HomeMaker
								</WhiteTextTypography>
							</TableCell>
							<TableCell align="right">
								<WhiteTextTypography>dest</WhiteTextTypography>
							</TableCell>
							<TableCell align="right">
								<WhiteTextTypography>
									BackgroundScore
								</WhiteTextTypography>
							</TableCell>
							<TableCell align="right">
								<WhiteTextTypography>
									Approve
								</WhiteTextTypography>
							</TableCell>
							<TableCell align="right">
								<WhiteTextTypography>
									Decline
								</WhiteTextTypography>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody className={classes.root}>
						{rows.map((row) => (
							<Row
								key={row.id}
								row={row}
								onDecline={handleDecline}
								onApprove={handleApprove}
							/>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Grid>
	);
}
