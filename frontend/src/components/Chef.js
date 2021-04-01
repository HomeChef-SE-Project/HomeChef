import { Card } from "react-bootstrap";
const Chef = ({ chef }) => {
    console.log("INside Chef.js page:");
    console.log(chef)
    return (
        <Card className="my-3 p-3 rounded">
            <a href={`/chef/${chef._id}`}>
                <Card.Img src={chef.googleID} variant="top" />
            </a>

            <Card.Body>
                <a href={`/user/1923461238795/menu`}>
                    <Card.Title as="div">
                        <strong>{chef.homechefname}</strong>
                    </Card.Title>
                </a>
            </Card.Body>

            <Card.Text as="div">
                <div className="my-3">
                    {chef.rating} from {chef.aadharID} reviews
                </div>
            </Card.Text>

            <Card.Text as="div">
                <div className="my-3">Location : {chef.location}</div>
            </Card.Text>
        </Card>
    );
};

export default Chef;
