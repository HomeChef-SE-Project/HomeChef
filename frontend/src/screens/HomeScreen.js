import React,{Component, useEffect, useState} from "react";
import { Row, Col } from "react-bootstrap";
import Chef from "../components/Chef";
// import chefs from "../chefs";
import axios from "axios";


const HomeScreen = () => {
    
    const [chefs,setChefs]=useState([])
    console.log("chefs in Homescreen.js:");
    console.log(chefs);
    // constructor(props)
    // {
    //     super(props);
    //     this.state = { chefs = []};
    // }
    
    // componentDidMount(){
    //     axios.get("http://localhost:5000/homemakers").then((res) => {
    //         //console.log(res);
    //         console.log("Authcalback_post");
    //         //this.setState({ userid: res.data.id, isLoading: false });
            
    //         chefs = res.data;
    //         console.log("chefs data presenting below:");
    //         console.log(chefs);
    //     });
    // }

    useEffect(()=>{
        axios.get("http://localhost:5000/homemakers").then((res) => {
        //console.log(res);
        console.log("Authcalback_post");
        //this.setState({ userid: res.data.id, isLoading: false });
        
        setChefs(res.data);
        console.log("chefs data presenting below:");
        console.log(chefs);
    })}
,[]);



    return (
        <div>
            <h1>Homemakers near you</h1>
            <Row>
                {chefs.map((chef) => (
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <Chef key={chef.id} chef={chef} />
                    </Col>
                ))}
                
            </Row>
        </div>
    );
};

export default HomeScreen;
