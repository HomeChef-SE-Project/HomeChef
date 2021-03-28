import React, { Component } from "react";

class Item extends Component {
    getBadgeClasses() {
        let classes = "badge bg-";
        classes +=
            this.props.item.count === 0
                ? "warning text-dark"
                : "primary text-light";
        return classes;
    }

    render() {
        return (
            <div
                style={{ minWidth: 600 }}
                className="card w-50 card text-white bg-secondary mb-3 m-4"
            >
                <div className="card-body">
                    <h5 className="card-title">{this.props.item.value}</h5>
                    <span className="card-text">
                        Rs. {this.props.item.cost}
                    </span>
                    <span style={{ float: "right" }}>
                        <button
                            disabled={!this.props.item.count}
                            onClick={() =>
                                this.props.onDecrement(this.props.item)
                            }
                            className="btn btn-dark bg-dark "
                        >
                            <b>-</b>
                        </button>{" "}
                        <span
                            style={{ fontSize: 20 }}
                            className={this.getBadgeClasses()}
                        >
                            {this.props.item.count}
                        </span>{" "}
                        <button
                            onClick={() =>
                                this.props.onIncrement(this.props.item)
                            }
                            className="btn btn-dark bg-dark "
                        >
                            <b>+</b>
                        </button>
                    </span>
                </div>
            </div>
        );
    }
}

export default Item;
