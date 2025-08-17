import React, {Component} from 'react';
import { BsLightningFill } from "react-icons/bs";

class Middle extends Component {
    render() {
        return (
            <div className="bg-gradient-to-r from-[#663399] to-[#5D3FD3] h-150 relative h-screen flex justify-between">
                <div className="flex items-start pt-22 pl-20 flex-col">
                    <h1 className = "text-white text-5xl font-extrabold tracking-wide leading-tight">GIVE YOUR BRAND THE<br />
                    WEB DESIGN IT DESERVES</h1>
                    <h2 className = "text-white pt-6 text-2xl">PROFESSIONAL WEB DESIGN & DEVELOPMENT</h2>
                    <div className='flex flex-col'>
                        <p className='text-white pt-6 pl-4'>Get a website designed in under a week</p>
                        <p className='text-white pt-6 pl-4'>Get a secure database and a real time analytics dashboard</p>
                        <p className='text-white pt-6 pl-4'>Ongoing support and maintenance for future updates</p>
                     </div>
                </div>
                <img src="./iphone.png" alt="iphone logo" className="pr-25 pt-5 h-150 "/>
            </div>
        );
    }
}

export default Middle;