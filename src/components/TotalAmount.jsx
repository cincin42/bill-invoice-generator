import React from "react";

const TotalAmount = ({ total }) => {


    return (
        <div className="total-amount">
        <h2>Total Amount</h2>
        <p>${total.toFixed(2)}</p>
        </div>
    );

}

export default TotalAmount;