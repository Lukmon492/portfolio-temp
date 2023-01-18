import React from "react";
import "./payment.css";

const Payment = () => {
  return (
    <div className="payment__section">
      <h2 className="payment__header">Price plans</h2>
      <p className="payment__text">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </p>
      <div className="payment__cards">
        <div className="payment__card">
          <h3>silver</h3>
          <div className="payment__plan">
            <h2>$0.00</h2>
            <span>/hour</span>
          </div>
          <p>For most businesses that want to optimize web queries</p>
          <ul>
            <li>
              <span>
                <svg
                  width="19"
                  height="13"
                  viewBox="0 0 19 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.36876 10.172L16.8998 0.979004L18.367 2.393L7.36876 13L0.77002 6.636L2.23618 5.222L7.36876 10.172Z"
                    fill="#FFB400"
                  />
                </svg>
              </span>
              <span></span>
            </li>
            <li>
              <span></span>
              <span></span>
            </li>
            <li>
              <span></span>
              <span></span>
            </li>
            <li>
              <span></span>
              <span></span>
            </li>
            <li>
              <span></span>
              <span></span>
            </li>
            <li>
              <span></span>
              <span></span>
            </li>
            <li>
              <span></span>
              <span></span>
            </li>
            <li>
              <span></span>
              <span></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Payment;
