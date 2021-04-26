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
	const [thumbup, setThumbup] = React.useState(false);
    const [thumbdown, setThumbdown] = React.useState(false);
	const [doneall, setDoneall] = React.useState(false);

	const handleThumbup = () => {
		setThumbup(!thumbup);
	};

    const handleThumbdown = () => {
        setThumbdown(!thumbdown);
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
			// onMouseEnter={handleExpandHover}
			// onMouseLeave={handleExpandHover}
			style={{
				boxShadow: "0 20px 100px -12px rgba(0,0,0,0.8)",
			}}
		>
			<CardHeader
				title={props.title} // Brand name here
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
                <Button variant="contained" color="primary" href="#details">
                    Get Details
                </Button>
                          
                <IconButton
					aria-label="add to favorites"
					style={{ color: !thumbup ? "#B030B0" : "green" }}
                    //style={{ color: !thumbdown ? "#B030B0" : "red"}}
					onClick={handleThumbup}
				>
					<ThumbUpIcon />
				</IconButton>

                <IconButton
					aria-label="add to favorites"
					style={{ color: !thumbdown ? "#B030B0" : "red" }}
                    //style={{ color: !thumbup ? "#Bo3030" : "red"}}
					onClick={handleThumbdown}
				>
					<ThumbDownIcon />
				</IconButton>

                <IconButton
					aria-label="add to favorites"
					style={{ color: !doneall ? "#B030B0" : "green" }}
					onClick={handleDoneall}
				>
					<DoneAllIcon />
				</IconButton>
            
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<Typography paragraph>{props.descr}</Typography>
				</CardContent>
			</Collapse>
		</Card>
	);
};

export default OrderCard;
