import React from "react";
import "../css/Footer.css";

const Footer = ({ handleProceed }) => {
    return (
        <>
            <button className="proceedBtn"
                    onClick={() => handleProceed()}>Proceed</button>
        </>
    );
};

export default Footer;