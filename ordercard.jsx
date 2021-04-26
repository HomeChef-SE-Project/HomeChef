import React from "react";
import {
	makeStyles,
	Theme,
	createStyles,
	withStyles,
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red, green, grey, white } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import CheckIcon from '@material-ui/icons/Check';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import CloseIcon from '@material-ui/icons/Close';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			maxWidth: 350,
			backgroundColor: "#202060",
			transition: theme.transitions.create("transform", {
				duration: theme.transitions.duration.shortest,
			}),
		},
		cardHovered: {
			maxWidth: 350,
			backgroundColor: "#202060",
			transform: "scale3d(1.15,1.15,1.2)",
			transition: theme.transitions.create("transform", {
				duration: theme.transitions.duration.shortest,
			}),
		},
		media: {
			height: 0,
			paddingTop: "56.25%", // 16:9
		},
		expand: {
			transform: "rotate(0deg)",
			marginLeft: "auto",
			transition: theme.transitions.create("transform", {
				duration: theme.transitions.duration.shortest,
			}),
		},
		expandOpen: {
			transform: "rotate(180deg)",
		},
		avatar: {
			backgroundColor: red[500],
		},
		typo: {
			textSecondary: "#FFFFFF",
		},
	})
);
const WhiteTextTypography = withStyles({
	root: {
		color: "#FFFFFF",
		opacity: 0.8,
	},
})(Typography);

const OrderCard = (props) => {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);
	const [done, setDone] = React.useState(false);
    const [close, setClose] = React.useState(false);
	const [doneall, setDoneall] = React.useState(false);

	const handleDone = () => {
		setDone(!done);
	};

    const handleClose = () => {
        setClose(!close);
    };

	const handleDoneall = () => {
		setDoneall(!doneall);
	};

	const handleExpandHover = () => {
		setExpanded(!expanded);
	};

	return (
		<Card
			className={classes.root}
			classes={{ root: expanded ? classes.cardHovered : "" }}
			 onMouseEnter={handleExpandHover}
			 onMouseLeave={handleExpandHover}
			style={{
				boxShadow: "0 20px 100px -12px rgba(0,0,0,0.8)",
			}}
		>
			<CardHeader
			
				title= {<WhiteTextTypography>{props.title}</WhiteTextTypography>} 
				subheader={props.subtitle}
			/>
			<CardMedia
				className={classes.media}
				image={props.bg}
				title={props.title}
			/>
			<CardContent>
				<WhiteTextTypography
					variant="subtitle1"
					color="primary"
					component="p"
					align="center"
					//color="grey"
				>
				</WhiteTextTypography>
			</CardContent>
			<CardActions disableSpacing>
                <Button variant="contained" color="primary" href= {props.id+ "#details"}>
                    Get Details
                </Button>
                          
                <IconButton
					aria-label="Accept Order"
					style={{ color: !done ? "#B030B0" : "green" }}
                    //style={{ color: !thumbdown ? "#B030B0" : "red"}}
					onClick={handleDone}
				>
					<DoneIcon />
				</IconButton>

                <IconButton
					aria-label="Reject Order"
					style={{ color: !close ? "#B030B0" : "red" }}
                    //style={{ color: !thumbup ? "#Bo3030" : "red"}}
					onClick={handleClose}
				>
					<CloseIcon />
				</IconButton>
            
			</CardActions>
		</Card>
	);
};

export default OrderCard;
