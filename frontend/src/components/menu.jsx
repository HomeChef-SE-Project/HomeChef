import React, { Component, useEffect, useState , useCallback } from "react";
import Item from "./item";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import backendUrl from "../deployment"
//import {withRouter} from 'react-router-dom';


const Menu = ()=> {
    
    const location = useLocation();
    console.log(location.pathname);
    let stringarray=(location.pathname).split("/")
    console.log(stringarray)
    let chefId=stringarray[2];
    const [items,setItems] = useState([]);
    const [menu,setMenu]=useState({
        items:[],
        cartCount:0
    })

    const getBadgeClasses = useCallback((item) => {
        let classes = "badge bg-";
        classes +=
            item.count === 0
                ? "warning text-dark"
                : "primary text-light";
        return classes;
    }, []);
    

    useEffect(()=>{
        localStorage.setItem('chefId', chefId);
        axios.get(`${backendUrl}/homemakers/user/${chefId}/menu`).then((res) => {
            //console.log(res);
            console.log("Authcalback_post");
            //this.setState({ userid: res.data.id, isLoading: false });
            
            setItems(res.data);
            console.log("Items data presenting below:");
            console.log(items);})
    },[])
  //  setItems(location.state.items);
    console.log(items);
    

    // const getItems = () => {
    //     axios.get("http://localhost:5000/").then((res) => {
    //         console.log(res);
    //         setItems(res.data);
    //     });
    // }

  const  handleDecrement = (item) => {
       // const items = [...items]; //Copies by reference
        const index = items.indexOf(item);
        items[index] = { ...item };
        items[index].count--;
        const len = items.filter((c) => c.count > 0).length;
        setMenu({ items:items, cartCount: len });
    };

  const  handleIncrement = (item) => {
         //Copies by reference
        const index = items.indexOf(item);
        items[index] = { ...item };
        items[index].count++;
        const len = items.filter((c) => c.count > 0).length;
        setMenu({ items:items, cartCount: len });
    };

   
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            MENU
                        </a>{" "}
                        <div className="" id="navbarNav">
                            <ul className="navbar-nav">
                                {" "}
                                <li className="nav-item px-4">
                                    <Link
                                        to={{
                                            pathname:
                                                `/user/${localStorage.getItem('userid')}/checkout`,
                                            state: {
                                                items:items,
                                            },
                                        }}
                                    >
                                        <button
                                            type="button"
                                            className="btn btn-primary btn-lg"
                                        >
                                            <big>Cart</big>{" "}
                                            <span className="badge bg-primary" style={{ color:"#FFFFFF", fontWeight:"bold" }}>
                                                <big>
                                                    {menu.cartCount}
                                                </big>
                                            </span>
                                        </button>
                                    </Link>
                                </li>{" "}
                            </ul>
                        </div>
                    </div>
                </nav>
               { items.map((item) => (
                   
                <div
                style={{ minWidth: 600 }}
                className="card w-50 card bg-secondary mb-3 m-4"
            >
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <span className="card-text">
                        Rs. {item.price}
                    </span>
                    <span style={{ float: "right" }}>
                        <button
                            disabled={!item.count}
                            onClick={() =>
                                handleDecrement(item)
                            }
                            className="btn btn-dark bg-dark "
                        >
                            <b>-</b>
                        </button>{" "}
                        <span
                            style={{ fontSize: 20 }}
                            className={getBadgeClasses(item)}
                        >
                            {item.count}
                        </span>{" "}
                        <button
                            onClick={() =>
                                handleIncrement(item)
                            }
                            className="btn btn-dark bg-dark "
                        >
                            <b>+</b>
                        </button>
                    </span>
                </div>
            </div>
                ))}
            </div>
        );
    }


export default Menu;
