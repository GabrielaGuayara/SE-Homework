import React from 'react'
import { AiOutlineLoading3Quarters,AiOutlineLoading, } from "react-icons/ai";
export function Comp1and2(props)
{
    return (
        <ul>
            <li className='vlue'>{props.val}</li>
        </ul>);

}
export function Comp3(props)
{
    return (
        <ul>
            <li className='vlue'><AiOutlineLoading3Quarters/> {props.val}</li>
            <li className='vlue'><AiOutlineLoading/> {props.val2}</li>
            <li className='vlue'><AiOutlineLoading3Quarters/>{props.val3}</li>
        </ul>);

}

