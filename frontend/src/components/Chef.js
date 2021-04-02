import { useState } from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router";
const Chef = ({ chef }) => {
    console.log("Inside Chef.js page:");
    console.log(chef)
    const history = useHistory();
    const [items,setItems] = useState({});
  
    // const selectedChef = async (id) => {

    //     //let id = e.target.id;
    //     const res = await axios({
    //         url:`http://localhost:5000/homemakers/user/${id}/menu`
    //          ,
    //         method: "get",
           
           
    //       })
    //  console.log("hello"+res.data);
    //  setItems(res.data);
    //   console.log(items)

    //     history.push({
    //         pathname : `/user/${id}/menu`,
    //         state: {
    //             data:items
    //         },
    //     })
        
    // }


    return (
        
        <Card className="my-3 p-3 rounded"  >
     <a href={`/user/${chef.googleID}/menu`}> 
            {/* <a href={`/chef/${chef._id}`}> */}
                <Card.Img src={chef.profile.imageUrl} variant="top" />
            {/* </a> */}

            <Card.Body>
               
                    <Card.Title as="div">
                        <strong>{chef.homechefname}</strong>
                    </Card.Title>
              
            </Card.Body>

            <Card.Text as="div">
                <div className="my-3">
                    {chef.rating} from {chef.nReviews} reviews    
                </div>
            </Card.Text>

            <Card.Text as="div">
                <div className="my-3">Location : {chef.location}</div>
            </Card.Text>
            </a> 
        </Card>
    );
};

export default Chef;
