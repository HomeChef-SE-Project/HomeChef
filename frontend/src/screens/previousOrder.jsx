import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";
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
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { red, green } from "@material-ui/core/colors";

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
		//borderCollapse: "separate",
		//borderSpacing: " 0 10px",
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
	const [open, setOpen] = React.useState(false);
	const classes = useRowStyles();

	return (
		<React.Fragment>
			<TableRow>
				<TableCell component="th" scope="row">
					<WhiteTextTypography>{row.id}</WhiteTextTypography>
				</TableCell>
				<TableCell align="right">
					<WhiteTextTypography>{row.name}</WhiteTextTypography>
				</TableCell>
				<TableCell align="right">
					<WhiteTextTypography>{row.agent}</WhiteTextTypography>
				</TableCell>
				<TableCell align="right">
					<WhiteTextTypography>{row.contact}</WhiteTextTypography>
				</TableCell>
			</TableRow>
		</React.Fragment>
	);
}

const arr = [
	{
		id: 1234,
		name: "Chicken Biryani",
		agent: "Mr. Maruti Rao",
		contact: 9623785643,
	},
	{
		id: 2345,
		name: "Veg pulao",
		agent: "Mr. siddheswar",
		contact: 7654834657,
	},
];

export default function PreviousOrders() {
	const classes = useRowStyles();
	const [Rowlist, changeRow] = React.useState(arr);

	const handleDone = (id) => {
		changeRow(Rowlist.filter((r) => r.id !== id));
	};
	return (
		<Grid conatiner className={classes.gr}>
			<WhiteTextTypography align="center" variant="h3">
				Previous Orders
			</WhiteTextTypography>
			<TableContainer component={Paper} className={classes.table}>
				<Table aria-label="collapsible table">
					<TableHead className={classes.root}>
						<TableRow>
							<TableCell>
								<WhiteTextTypography>
									Order ID
								</WhiteTextTypography>
							</TableCell>
							<TableCell align="right">
								<WhiteTextTypography>Order</WhiteTextTypography>
							</TableCell>
							<TableCell align="right">
								<WhiteTextTypography>
									Delivery Partner
								</WhiteTextTypography>
							</TableCell>
							<TableCell align="right">
								<WhiteTextTypography>
									Contact
								</WhiteTextTypography>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody className={classes.root}>
						{Rowlist.map((row) => (
							<Row key={row.id} row={row} onDone={handleDone} />
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Grid>
	);
}
