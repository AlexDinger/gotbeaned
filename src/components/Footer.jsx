import React from "react";
import MailingListForm from "./MailingListForm";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="w-full bg-bean-brown text-white md:px-52">
      <MailingListForm />
      <div className="border-t-2 border-b-2 border-gray-600 flex md:flex-row flex-row items-center justify-around">
        <a href="#">
          <img src={logo} className="w-full max-w-sm h-auto" />
        </a>
        <div className="flex flex-col space-y-4 p-10">
          <a href="#">
            <div className="flex flex-row space-x-2 items-center">
              <FontAwesomeIcon icon={["fab", "twitter"]} />
              <p>Twitter</p>
            </div>
          </a>
          <a href="#">
            <div className="flex flex-row space-x-2 items-center">
              <FontAwesomeIcon icon={["fab", "instagram"]} />
              <p>Instagram</p>
            </div>
          </a>
          <a href="#">
            <div className="flex flex-row space-x-2 items-center">
              <FontAwesomeIcon icon={["fab", "facebook"]} />
              <p>Facebook</p>
            </div>
          </a>
        </div>
      </div>
      <div className="py-4 px-10 pb-10 flex md:flex-row flex-col justify-between items-center space-y-5">
        <p>&copy; 2021 GotBeaned. All Rights Reserved.</p>
        <div className="w-full flex flex-row space-x-2 items-center justify-center">
          <FontAwesomeIcon icon={["fab", "cc-paypal"]} size="lg" />
          <FontAwesomeIcon icon={["fab", "cc-amex"]} size="lg" />
          <FontAwesomeIcon icon={["fab", "cc-amazon-pay"]} size="lg" />
          <FontAwesomeIcon icon={["fab", "cc-apple-pay"]} size="lg" />
          <FontAwesomeIcon icon={["fab", "cc-visa"]} size="lg" />
          <FontAwesomeIcon icon={["fab", "cc-discover"]} size="lg" />
          <FontAwesomeIcon icon={["fab", "cc-mastercard"]} size="lg" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
