import axios from "axios";
import { Component } from "react";
import backendUrl from "./deployment";

var pending = []

class pendingRetrieve extends Component{

    onComponentMount(){
        axios.get(`${backendUrl}/admin/${localStorage.getItem('userid')}`).then((res) => {
        //console.log(res);
        console.log("Admin landing page");
        //this.setState({ userid: res.data.id, isLoading: false });
        
        pending = res.data;  // 
        console.log("pending list presenting below:");
        console.log(pending);
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



// export default chefs;


// const orders = [
//     {
//         //imgsrc: "./images/gowthami.png",
//         title: "Chicken Supreme Pizza",
//         bg: "./images/Pizza.jpg",
//     },
//     {
//         //imgsrc: "./images/praneetha.jpg",
//         order_id : "1",
//         title: "Chicken Burger",
//         bg: "./images/Burger.jpg",
//     },
//     {
//         //imgsrc: "./logos/bluered.png",
//         order_id : "2",
//         title: "Mutton Keema Dosa",
//         bg: "./images/Dosa.jpg",
//     },
//     {
//         //imgsrc: "./logos/as.jpg",
//         order_id : "3",
//         title: "Chole Bhature",
//         bg: "./images/Chole.jpg",
//     },
// ]

export default pending