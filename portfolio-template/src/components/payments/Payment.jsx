import React from "react";
import "./payment.css";
import RectLine from "../RectLine/RectLine";

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
                  className="payment__icon"
                >
                  <path
                    d="M7.36876 10.172L16.8998 0.979004L18.367 2.393L7.36876 13L0.77002 6.636L2.23618 5.222L7.36876 10.172Z"
                    fill="#FFB400"
                  />
                </svg>
              </span>
              <span>UI Design</span>
            </li>
            <li>
              <span>
                <svg
                  width="19"
                  height="13"
                  viewBox="0 0 19 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="payment__icon"
                >
                  <path
                    d="M7.36876 10.172L16.8998 0.979004L18.367 2.393L7.36876 13L0.77002 6.636L2.23618 5.222L7.36876 10.172Z"
                    fill="#FFB400"
                  />
                </svg>
              </span>
              <span>web development</span>
            </li>
            <li>
              <span>
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="payment__icon"
                >
                  <path
                    d="M7.44249 5.58623L12.5751 0.63623L14.0412 2.05023L8.90864 7.00023L14.0412 11.9502L12.5751 13.3642L7.44249 8.41423L2.30991 13.3642L0.84375 11.9502L5.97633 7.00023L0.84375 2.05023L2.30991 0.63623L7.44249 5.58623Z"
                    fill="#767676"
                  />
                </svg>
              </span>
              <span className="fade__text">logo design</span>
            </li>
            <li>
              <span>
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="payment__icon"
                >
                  <path
                    d="M7.44249 5.58623L12.5751 0.63623L14.0412 2.05023L8.90864 7.00023L14.0412 11.9502L12.5751 13.3642L7.44249 8.41423L2.30991 13.3642L0.84375 11.9502L5.97633 7.00023L0.84375 2.05023L2.30991 0.63623L7.44249 5.58623Z"
                    fill="#767676"
                  />
                </svg>
              </span>
              <span className="fade__text">seo optimization</span>
            </li>
            <li>
              <span>
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="payment__icon"
                >
                  <path
                    d="M7.44249 5.58623L12.5751 0.63623L14.0412 2.05023L8.90864 7.00023L14.0412 11.9502L12.5751 13.3642L7.44249 8.41423L2.30991 13.3642L0.84375 11.9502L5.97633 7.00023L0.84375 2.05023L2.30991 0.63623L7.44249 5.58623Z"
                    fill="#767676"
                  />
                </svg>
              </span>
              <span className="fade__text">wordPress integration</span>
            </li>
            <li>
              <span>
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="payment__icon"
                >
                  <path
                    d="M7.44249 5.58623L12.5751 0.63623L14.0412 2.05023L8.90864 7.00023L14.0412 11.9502L12.5751 13.3642L7.44249 8.41423L2.30991 13.3642L0.84375 11.9502L5.97633 7.00023L0.84375 2.05023L2.30991 0.63623L7.44249 5.58623Z"
                    fill="#767676"
                  />
                </svg>
              </span>
              <span className="fade__text">5 Websites</span>
            </li>
            <li>
              <span>
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="payment__icon"
                >
                  <path
                    d="M7.44249 5.58623L12.5751 0.63623L14.0412 2.05023L8.90864 7.00023L14.0412 11.9502L12.5751 13.3642L7.44249 8.41423L2.30991 13.3642L0.84375 11.9502L5.97633 7.00023L0.84375 2.05023L2.30991 0.63623L7.44249 5.58623Z"
                    fill="#767676"
                  />
                </svg>
              </span>
              <span className="fade__text">unlimited user</span>
            </li>
            <li>
              <span>
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="payment__icon"
                >
                  <path
                    d="M7.44249 5.58623L12.5751 0.63623L14.0412 2.05023L8.90864 7.00023L14.0412 11.9502L12.5751 13.3642L7.44249 8.41423L2.30991 13.3642L0.84375 11.9502L5.97633 7.00023L0.84375 2.05023L2.30991 0.63623L7.44249 5.58623Z"
                    fill="#767676"
                  />
                </svg>
              </span>
              <span className="fade__text">20 gB bandwith</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Payment;
