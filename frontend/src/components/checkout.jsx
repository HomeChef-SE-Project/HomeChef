import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
//var location = null;
class Checkout extends Component {
    state = {};
    //items = location.state.items;
    // location = useLocation();

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

                        {/* <div className="row gy-3">
                            <div className="col-md-6">
                                <label htmlFor="cc-name" className="form-label">
                                    Name on card
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cc-name"
                                    placeholder=""
                                    required
                                    defaultChecked
                                />
                                <small className="text-muted">
                                    Full name as displayed on card
                                </small>
                                <div className="invalid-feedback">
                                    Name on card is required
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label
                                    htmlFor="cc-number"
                                    className="form-label"
                                >
                                    Credit card number
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cc-number"
                                    placeholder=""
                                    required
                                    defaultChecked
                                />
                                <div className="invalid-feedback">
                                    Credit card number is required
                                </div>
                            </div>

                            <div className="col-md-3">
                                <label
                                    htmlFor="cc-expiration"
                                    className="form-label"
                                >
                                    Expiration
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cc-expiration"
                                    placeholder=""
                                    required
                                    defaultChecked
                                />
                                <div className="invalid-feedback">
                                    Expiration date required
                                </div>
                            </div>

                            <div className="col-md-3">
                                <label htmlFor="cc-cvv" className="form-label">
                                    CVV
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cc-cvv"
                                    placeholder=""
                                    required
                                    defaultChecked
                                />
                                <div className="invalid-feedback">
                                    Security code required
                                </div>
                            </div>
                        </div> */}

                        <hr className="my-4"></hr>
                        <div>
                            <Link to={`/user/${localStorage.getItem('userid')}/orderplaced`}>
                                <button
                                    className="w-100 row g-5 m-4 btn btn-primary btn-lg"
                                    type="submit"
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
