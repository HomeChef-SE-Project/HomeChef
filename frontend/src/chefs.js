import axios from "axios";
import { Component } from "react";
import backendUrl from "../deployment";

var chefs = []

class ChefRetrieve extends Component{

    onComponentMount(){
        axios.get(`${backendUrl}/homemakers`).then((res) => {
        //console.log(res);
        console.log("Authcalback_post");
        //this.setState({ userid: res.data.id, isLoading: false });
        
        chefs = res.data;
        console.log("chefs data presenting below:");
        console.log(chefs);
    });
    }
    

    
}

// const chefs = [
//     {
//         _id: "1",
//         name: "Praneetha",
//         image: "/images/praneetha.jpg",
//         location: "Bits hyderabad",
//         description: "Good at hyderabadi biryani",
//         rating: 4.5,
//         numReviews: 4,
//     },

//     {
//         _id: "2",
//         name: "Gowthami",
//         image: "/images/gowthami.jpg",
//         location: "Madhapur",
//         description: "Good at ghoting",
//         rating: 4.5,
//         numReviews: 6,
//     },

//     {
//         _id: "3",
//         name: "Sai Pallavi",
//         image: "/images/Sai Pallavi.jpg",
//         location: "Bhaswada",
//         description: "Good at ghoting",
//         rating: 4.5,
//         numReviews: 6,
//     },
// ];



export default chefs;
