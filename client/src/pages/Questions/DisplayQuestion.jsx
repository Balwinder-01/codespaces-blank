import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import Questiondetails from "./Questiondetails";

const DisplayQuestion = () => {
    return (
        <div className="home-container-1">
        <LeftSidebar />
        <div className="home-container-2">
        <Questiondetails />
        <RightSidebar />
        </div>
        </div>
    );
};

export default DisplayQuestion;
