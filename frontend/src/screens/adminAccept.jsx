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
				<TableCell>
					<IconButton
						aria-label="expand row"
						size="small"
						onClick={() => setOpen(!open)}
					>
						{open ? (
							<KeyboardArrowUpIcon
								style={{ color: "#FFFFFF", opacity: "0.60" }}
							/>
						) : (
							<KeyboardArrowDownIcon
								style={{ color: "#FFFFFF", opacity: "0.60" }}
							/>
						)}
					</IconButton>
				</TableCell>
				<TableCell component="th" scope="row">
					<WhiteTextTypography>{row.name}</WhiteTextTypography>
				</TableCell>
				<TableCell align="right">
					<WhiteTextTypography>{row.contact}</WhiteTextTypography>
				</TableCell>
				<TableCell align="right">
					<WhiteTextTypography>{row.email}</WhiteTextTypography>
				</TableCell>
				<TableCell align="right">
					<WhiteTextTypography>{row.aadhar}</WhiteTextTypography>
				</TableCell>
				<TableCell align="right">
					<WhiteTextTypography>{row.backgscore}</WhiteTextTypography>
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
			<TableRow style={{ opacity: open ? 1 : 0 }} className={classes.row}>
				<TableCell>
					<Collapse in={open} timeout="auto" unmountOnExit="True">
						<Box>
							<WhiteTextTypography
								variant="h6"
								gutterBottom
								component="div"
							>
								BackGround Review
							</WhiteTextTypography>
							<WhiteTextTypography>
								{row.review}
							</WhiteTextTypography>
						</Box>
					</Collapse>
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
		email: "sandhyagupta6@gmail.com",
		aadhar: 345623785643,
		backgscore: 8.2,
		review:
			"A decent HomeMaker who is a wonderful chef. She is trying to be independent by selling her recipies",
	},
	{
		id: 2345,
		name: "Ms.Durba",
		contact: 7654834657,
		email: "durbe4@yahoo.com",
		aadhar: 856473594675,
		backgscore: 4.3,
		review:
			"A decent HomeMaker who is a wonderful chef. She is trying to be independent by selling her recipies",
	},
	{
		id: 4567,
		name: "Mr.Abhinav",
		contact: 9775468673,
		email: "abhinavkapoor3@gamil.com",
		aadhar: 636483546785,
		backgscore: 6.0,
		review:
			"A decent HomeMaker who is a wonderful chef. She is trying to be independent by selling her recipies",
	},
];

export default function CollapsibleTable() {
	const classes = useRowStyles();
	const [rows, decline] = React.useState(arr);
	const [approved, approve] = React.useState([]);

	const handleDecline = (id) => {
		decline(rows.filter((r) => r.id !== id));
		console.log("delete called", id);
	};
	const handleApprove = (id) => {
		approve(approved.concat(rows.filter((r) => r.id === id)));
		handleDecline(id);
	};

	return (
		<Grid conatiner className={classes.gr}>
			<WhiteTextTypography align="center" variant="h3" padding="10px">
				Pending Approvals
			</WhiteTextTypography>
			<TableContainer component={Paper} className={classes.table}>
				<Table aria-label="collapsible table">
					<TableHead className={classes.root}>
						<TableRow>
							<TableCell />
							<TableCell>
								<WhiteTextTypography>
									Home Maker
								</WhiteTextTypography>
							</TableCell>
							<TableCell align="right">
								<WhiteTextTypography>
									Contact
								</WhiteTextTypography>
							</TableCell>
							<TableCell align="right">
								<WhiteTextTypography>Email</WhiteTextTypography>
							</TableCell>
							<TableCell align="right">
								<WhiteTextTypography>
									Aadhar
								</WhiteTextTypography>
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
