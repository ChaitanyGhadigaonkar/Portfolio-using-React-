import React from 'react'
// import Project from './Project'
import ProjectItem from './ProjectItem'
import ResturantImg from "./Images/Restorant.gif"
import flipkart from "./Images/flipkart.png"
import News_app from "./Images/News-app.png"
import rps from "./Images/r-p-s.png"


export default function ProjectSection() {
    return (
        <>
            <div className="project-section">
                <div className="project-con width-80 margin-auto">
                    <h1>My Projects</h1>
                    <div className="project-items">
                        <ProjectItem href="https://chaitanyghadigaonkar.github.io/Foot-Restaurant-Website/" activeImg={ResturantImg} h1="Landing Page - Food Restorant" descPara="I have created the Landing page for Restorant using HTML CSS and JavaScript." />
                        <ProjectItem href="https://chaitanyghadigaonkar.github.io/Foot-Restaurant-Website/" activeImg={flipkart} h1="FrontEnd Flipkart Clone" descPara="I have created the FrontEnd of flipkart using HTML CSS and JavaScript." />
                    </div>
                    <div className="project-items">
                        <ProjectItem href="https://chaitanyghadigaonkar.github.io/Foot-Restaurant-Website/" activeImg={News_app} h1="News-app" descPara="News-app using News API in React." />
                        <ProjectItem href="https://chaitanyghadigaonkar.github.io/Foot-Restaurant-Website/" activeImg={rps} h1="Rock Paper Scissors.." descPara="Traditional Rock Paper Scissors with good GUI using React Js." />
                    </div>
                    <div className="more-projects width-80  margin-auto">
                        <button className="m-p-btn">
                            <a href="/more-projects">See More</a>
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}
