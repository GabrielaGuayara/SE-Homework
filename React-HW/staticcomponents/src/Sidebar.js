import React from "react";
import { BsDashSquareFill, BsFillGrid1X2Fill,BsFillPeopleFill } from "react-icons/bs";
import { AiFillStar,AiOutlineSetting } from "react-icons/ai";
import { IoAnalyticsSharp } from "react-icons/io5";

function SideBar()
{
    return (
    <div id='nav'>
        <ul id='list'>
        <li> <BsDashSquareFill/> Dashboard</li>
        <li><BsFillGrid1X2Fill/> Widge</li>
        <li><AiFillStar/> Reviews</li>
        <li><BsFillPeopleFill/> Customers</li>
        <li><IoAnalyticsSharp/> Online analytics</li>
        <li><AiOutlineSetting/> Settings</li>
        </ul>
        {/* <h3> Lets go for a <FaBeer />? </h3> */}
    </div>
    )
}

export default SideBar;