import React from "react";
import { makeStyles, withStyles, Theme } from "@material-ui/core/styles";
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
import { AddCircle, Close } from "@material-ui/icons";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { red, green } from "@material-ui/core/colors";
import clsx from "clsx";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import Header from "../components/Header4";
import Button from "@material-ui/core/Button"
import axios from "axios";
import backendUrl from "../deployment";

const useRowStyles = makeStyles({
	root: {
		"& > *": {
			borderBottom: "unset",
			backgroundColor: "#59994D",
			boxShadow: "0 20px 100px -12px rgba(0,0,0,0.8)",
			//borderCollapse: "separate",
			//borderSpacing: " 0 10px",
		},
	},
	table: {
		backgroundColor: "#FFFFFF",
		//mWidth: "100vh",
		//minHeight: "100vh",
		//borderCollapse: "separate",
		//borderSpacing: " 0 10px",
	},
	row: {
		//minWidth: "100%",
	},
	gr: {
		display: "flex",
		flexWrap: "wrap",
		backgroundColor: "#FFFFFF",
		minWidth: "100vh",
		//minHeight: "100vh",
		justifyContent: "space-between",
		justifyItems: "left",
		padding: "20px",
		flexFlow: "row wrap ",
		//position: "relative",
	},
	margin: {
		margin: 1,
	},
	withoutLabel: {
		marginTop: 3,
	},
	textField: {
		width: "40ch",
		color: "#FFFFFF",
	},
});

const WhiteTextTypography = withStyles({
	root: {
		color: "#FFFFFF",
		opacity: 0.8,
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
					<WhiteTextTypography>{row.Item}</WhiteTextTypography>
				</TableCell>
				<TableCell align="right">
					<WhiteTextTypography>{row.price}</WhiteTextTypography>
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
								Item Description
							</WhiteTextTypography>
							<WhiteTextTypography>
								{row.desc}
							</WhiteTextTypography>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</React.Fragment>
	);
}

function InputAdornments(props) {
	const classes = useRowStyles();
	const [values, setValues] = React.useState({
		Item: "",
		price: "",
		desc: "",
	});
	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};
	const erase = () => {
		setValues({ Item: "", price: "", desc: "" });
	};
	const whenClicked = (values) => {
		props.addField(values);
		erase();
	};

	return (
		<div className={classes.root}>
			<div>
				<FormControl
					className={clsx(
						classes.margin,
						classes.withoutLabel,
						classes.textField
					)}
				>
					<div>
						<InputLabel htmlFor="outlined-adornment-item">
							<WhiteTextTypography>Item</WhiteTextTypography>
						</InputLabel>
						<Input
							id="standard-adornment-Item"
							value={values.Item}
							onChange={handleChange("Item")}
							aria-describedby="standard-Item-helper-text"
							inputProps={{
								"aria-label": "Item",
							}}
							error={values.Item === ""}
							helperText={
								values.Item === "" ? "Empty field!" : " "
							}
						/>
					</div>
				</FormControl>
				<FormControl
					className={clsx(
						classes.margin,
						classes.withoutLabel,
						classes.textField
					)}
				>
					<div>
						<InputLabel htmlFor="outlined-adornment-Price">
							<WhiteTextTypography>Price</WhiteTextTypography>
						</InputLabel>
						<Input
							id="standard-adornment-price"
							value={values.price}
							onChange={handleChange("price")}
							// endAdornment={
							// 	<InputAdornment position="start">
							// 		<WhiteTextTypography>
							// 			Rs.
							// 		</WhiteTextTypography>
							// 	</InputAdornment>
							// }
							aria-describedby="standard-price-helper-text"
							inputProps={{
								"aria-label": "price in Rs",
							}}
							error={values.price === ""}
							helperText={
								values.price === "" ? "Empty field!" : " "
							}
						/>
					</div>
				</FormControl>
				<FormControl
					className={clsx(
						classes.margin,
						classes.withoutLabel,
						classes.textField
					)}
				>
					<InputLabel htmlFor="outlined-adornment-Description">
						<WhiteTextTypography>Description</WhiteTextTypography>
					</InputLabel>
					<Input
						id="standard-adornment-descr"
						value={values.desc}
						onChange={handleChange("desc")}
						aria-describedby="standard-descr-helper-text"
						inputProps={{
							"aria-label": "descr",
						}}
						error={values.desc === ""}
						helperText={values.desc === "" ? "Empty field!" : " "}
					/>
				</FormControl>
				<IconButton onClick={() => whenClicked(values)}>
					<AddCircle />
				</IconButton>
			</div>
		</div>
	);
}

// let arr = [
// 	{
// 		id: 0,
// 		Item: "Chilli Chicken",
// 		price: "260",

// 		desc: "Saple text",
// 	},
// 	{
// 		id: 1,
// 		Item: "Veg manchurian",
// 		price: "130",

// 		desc: "sample text",
// 	},
// 	{
// 		id: 2,
// 		Item: "Chicken Biryani",
// 		price: "150",
// 		desc: "Sample Text",
// 	},
// ];

//let arr = [];

// function getMenuFromBackend() {
// 	axios.get(`${backendUrl}/homemaker/${localStorage.getItem('userid')}/menu`).then((res) => {
// 		res.data.map((item) =>(
// 			arr.push({
// 				id: item.itemid,
// 				Item: item.name,
// 				price: item.price,
// 				desc: item.description
// 			})
// 		));
// 		console.log("Successfully received menu from the backend");
// 	});
// };

function sendMenuToBackend(rows) {
	console.log("Send data = ");
	console.log(rows);
	let sendArr = [];
	rows.map((item) => (
		sendArr.push({
			itemid: item.id,
			name: item.Item,
			price: item.price,
			description: item.desc,
			count: 0
		})
	));
	console.log("Made sendArr; sendArr = ");
	console.log(sendArr);
	axios.post(`${backendUrl}/homemakers/${localStorage.getItem('userid')}/update_menu`, sendArr).then((res) => {
		console.log("sent updated menu");
		console.log(res.data);
		alert("Menu updated successfully!");
	});
}

export default function AddMenu() {
	const [isLoading, setLoading] = React.useState(true);
	const [rows, decline] = React.useState([]);
	const classes = useRowStyles();

	React.useEffect(()=>{
		//let isLoading = true;
		let arr = [];
		axios.get(`${backendUrl}/homemakers/${localStorage.getItem('userid')}/menu`).then((res) => {
			res.data.map((item) =>(
				arr.push({
					id: item.itemid,
					Item: item.name,
					price: item.price,
					desc: item.description
				})
			));
			console.log("Successfully received menu from the backend");
			console.log("res.data in gettingMenu = ");
			console.log(res.data);
			decline(arr);
			setLoading(false);
		});
		//getMenuFromBackend();
    },[])

	const handleDecline = (id) => {
		decline(rows.filter((r) => r.id !== id));
		console.log("delete called", id);
	};
	const handleAddField = (obj) => {
		decline(
			rows.concat({
				id: rows.length === 0 ? 0 : rows[rows.length - 1].id + 1,
				Item: obj.Item,
				price: obj.price,
				desc: obj.desc,
			})
		);
		console.log("got value:", obj.Item);
	};

	if(isLoading) return <p>Loading...</p>;
	else {
		return (
			<div>
				<Header />
				<Grid container className={classes.gr}>
						<h3>Current Menu</h3>
					<TableContainer component={Paper} className={classes.table}>
						<Table aria-label="collapsible table">
							<TableHead className={classes.root}>
								<TableRow>
									<TableCell />
									<TableCell>
										<WhiteTextTypography>
											Item
										</WhiteTextTypography>
									</TableCell>
									<TableCell align="right">
										<WhiteTextTypography>
											Price
										</WhiteTextTypography>
									</TableCell>
									<TableCell />
								</TableRow>
							</TableHead>
							<TableBody className={classes.root}>
								{rows.map((row) => (
									<Row
										key={row.id}
										row={row}
										onDecline={handleDecline}
									/>
								))}
							</TableBody>
						</Table>
					</TableContainer>
					<InputAdornments addField={handleAddField} />
					<Button
							variant="contained"
							color="#B030B0"
							onClick={() => sendMenuToBackend(rows)}
							href={`/homechef/${localStorage.getItem('userid')}`}
						>
							Submit
						</Button>
				</Grid>
			</div>
		);
	}
}
