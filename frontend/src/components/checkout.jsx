import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
//var location = null;
import axios from "axios";
import backendUrl from "../deployment"


class Checkout extends Component {
    //items = location.state.items;
    // location = useLocation();
    constructor(props) {
        super(props);
        this.state = {};
    
        // This binding is necessary to make `this` work in the callback
        this.onSubmit = this.onSubmit.bind(this);
      }
    sendData = (sendarray) => {
        console.log(sendarray);
        axios.post(`${backendUrl}/user/${localStorage.getItem('userid')}/addorder`,{items:sendarray,vendorID:localStorage.getItem('chefId') } ).then((res)=>{
			console.log('sending user cart details')
			console.log(this.props.location.state.items)
			console.log('Submitted homemaker form')
		})
        axios.post(`${backendUrl}/homemakers/${localStorage.getItem('chefId')}/addorder`,{items:sendarray,vendorID:localStorage.getItem('chefId') } ).then((res)=>{
			console.log('sending user cart details')
			console.log(this.props.location.state.items)
			console.log('Submitted homemaker form')
		})
    }
      onSubmit() {
        console.log("hello inside checkout page")
        console.log(this.props.location.state)
        let sendarray = [];
        this.props.location.state.items.map((item) => 
            sendarray.push({
                itemid:item.itemid,
                name:item.name,
                price:item.price,
                description:item.description
            })
        )
        console.log(sendarray);
        this.sendData(sendarray);
      }
    render() {
        //console.log(items);
        const items = this.props.location.state.items;
        let subtotal = 0;
        for (let i = 0; i < items.length; i++) {
            subtotal += items[i].count * items[i].price;
        }
        return (
            <div>
                <div className="row g-5 m-4">
                    <div className="col-md-5 col-lg-4 order-md-first">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Your cart</span>
                            <span className="badge bg-primary rounded-pill text-light">
                                {items.filter((c) => c.count > 0).length}
                            </span>
                        </h4>
                        <ul className="list-group mb-3">
                            { items.filter(item => item.count>0).map((item)=>(
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                <div>
                                    <h6 className="my-0">{item.name}</h6>
                                    <small className="text-muted">
                                        Qty: {item.count}
                                    </small>
                                </div>
                                <span className="text-muted">
                                    Rs.{item.count * item.price}   {/* items[0].count * items[0].cost */}
                                </span>
                            </li>
                            ))
                           
                            }
                            <li className="list-group-item d-flex justify-content-between bg-light">
                                <div className="text-success">
                                    <h6 className="my-0">Delivery</h6> 
                                    <small>Free!</small>
                                </div>
                                <span className="text-success">Rs.0</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Sub-total (INR)</span>
                                <strong>Rs.{subtotal}</strong>
                            </li>
                        </ul>
                        <hr className="my-4"></hr>

                        <h4 className="mb-3">Payment</h4>

                        <div className="my-3">
                            <div className="form-check">
                                <input
                                    id="credit"
                                    name="paymentMethod"
                                    type="radio"
                                    className="form-check-input"
                                    required
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="credit"
                                >
                                    Credit card
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    id="debit"
                                    name="paymentMethod"
                                    type="radio"
                                    className="form-check-input"
                                    required
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="debit"
                                >
                                    Debit card
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    id="paypal"
                                    name="paymentMethod"
                                    type="radio"
                                    className="form-check-input"
                                    required
                                    defaultChecked
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="paypal"
                                >
                                    Cash On Delivery
                                </label>
                            </div>
                        </div>

                        <hr className="my-4"></hr>
                        <div>
                            <Link to={`/user/${localStorage.getItem('userid')}/orderplaced`}>
                                <button
                                    className="w-100 row g-5 m-4 btn btn-primary btn-lg"
                                    type="submit"
                                    onClick = {this.onSubmit}
                                >
                                    Place Order
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Checkout;
