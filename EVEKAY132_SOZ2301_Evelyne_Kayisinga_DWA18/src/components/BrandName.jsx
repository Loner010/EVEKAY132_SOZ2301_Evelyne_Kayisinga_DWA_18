import React from "react";
import { Link } from "react-router-dom";

const BrandName = () => {
    return (
        <Link to="/">
            <h1 className="app-name">
                <span>AUDIOMACK</span>
            </h1>
        </Link>
    );
};

export default BrandName;
