import React from 'react'
import search_ico from './Images/search_ico.png'
export default function Navbar() {
    return (
        <>
        <nav className="width-60 margin-auto" id="nav">
            <div className="logo" id="logo">
                <h3><a href="/">ChaitanyGhadigaonkar</a></h3>
            </div>
            <div className="navigation-list">
                <div className="navigation">
                    <li><a href="/about" id="about">About</a></li>
                    <li><a href="/more-projects" id="projects">My Projects</a></li>
                </div>
                <div className="search">
                    <input type="search" name="" id="search-inp" placeholder="Search"/>
                        <button id="btn"><img src={search_ico} alt="" srcset=""/></button>
                </div>
            </div>
            <div className="hamburger">
                <div className="ham"></div>
                <div className="ham"></div>
                <div className="ham"></div>
            </div>


        </nav></>
        
    )
}
