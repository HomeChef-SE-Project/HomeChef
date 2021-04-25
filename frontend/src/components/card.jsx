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
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";

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

const HomeMakerCard = (props) => {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);
	const [liked, setLiked] = React.useState(false);
	const [shared, setShared] = React.useState(false);

	const handleLiked = () => {
		setLiked(!liked);
	};

	const handleShared = () => {
		setShared(!shared);
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
				avatar={
					<Avatar
						aria-label="recipe"
						className={classes.avatar}
						src={props.imgsrc}
					/>
				}
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
					</IconButton>
				}
				title={<WhiteTextTypography>{props.title}</WhiteTextTypography>} // Brand name here
				subheader={
					<WhiteTextTypography>{props.subtitle}</WhiteTextTypography>
				}
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
					User Rating : {props.rating}
				</WhiteTextTypography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton
					aria-label="add to favorites"
					style={{ color: !liked ? "#B030B0" : "red" }}
					onClick={handleLiked}
				>
					<FavoriteIcon />
				</IconButton>
				<IconButton
					aria-label="share"
					style={{ color: !shared ? "#B030B0" : "green" }}
					onClick={handleShared}
				>
					<ShareIcon />
				</IconButton>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<WhiteTextTypography paragraph>
						{props.descr}
					</WhiteTextTypography>
				</CardContent>
			</Collapse>
		</Card>
	);
};

export default HomeMakerCard;
