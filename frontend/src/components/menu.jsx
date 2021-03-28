import React, { Component } from "react";
import Item from "./item";
import { Link } from "react-router-dom";
import randVal from "./randval";

class Menu extends Component {
    state = {
        items: [
            [
                {
                    id: 1,
                    value: "Biriyani",
                    cost: 200,
                    count: 0,
                },
                {
                    id: 2,
                    value: "Paneer 65",
                    cost: 150,
                    count: 0,
                },
                {
                    id: 3,
                    value: "Paneer Butter Masala",
                    cost: 250,
                    count: 0,
                },
            ],

            [
                {
                    id: 1,
                    value: "Chikkis",
                    cost: 45,
                    count: 0,
                },
                {
                    id: 2,
                    value: "Vegetable Biriyani",
                    cost: 100,
                    count: 0,
                },
                {
                    id: 3,
                    value: "Chicken Tikka",
                    cost: 315,
                    count: 0,
                },
            ],
        ],
        cartCount: 0,
    };

    handleDecrement = (item) => {
        const items = [...this.state.items]; //Copies by reference
        const index = items[this.randVal].indexOf(item);
        items[randVal][index] = { ...item };
        items[randVal][index].count--;
        const len = items[randVal].filter((c) => c.count > 0).length;
        this.setState({ items, cartCount: len });
    };

    handleIncrement = (item) => {
        const items = [...this.state.items]; //Copies by reference
        const index = items[randVal].indexOf(item);
        items[randVal][index] = { ...item };
        items[randVal][index].count++;
        const len = items[randVal].filter((c) => c.count > 0).length;
        this.setState({ items, cartCount: len });
    };

    render() {
        console.log(randVal);
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
                                                "/user/1923461238795/checkout",
                                            state: {
                                                items: this.state.items[
                                                    randVal
                                                ],
                                            },
                                        }}
                                    >
                                        <button
                                            type="button"
                                            className="btn btn-primary btn-lg"
                                        >
                                            <big>Cart</big>{" "}
                                            <span className="badge bg-secondary">
                                                <big>
                                                    {this.state.cartCount}
                                                </big>
                                            </span>
                                        </button>
                                    </Link>
                                </li>{" "}
                            </ul>
                        </div>
                    </div>
                </nav>
                {this.state.items[randVal].map((item) => (
                    <Item
                        key={item.id}
                        item={item}
                        onDecrement={this.handleDecrement}
                        onIncrement={this.handleIncrement}
                    />
                ))}
            </div>
        );
    }
}

export default Menu;
