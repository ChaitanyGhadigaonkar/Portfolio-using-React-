import React from 'react';


import java from './Images/java.png';
import reactImg from './Images/react.png';
import html from './Images/html5.png';
import css from './Images/css3.png';
import javascript from './Images/javascript.png';
import mongoDB from './Images/mongodb.png';
import node from './Images/nodejs.png';


import twitter from './Images/twitter.png';
import linked_in from './Images/linkedin.png';
import github from './Images/github.png';
import SkillBox from './SkillBox';
export default function Middle() {
    return (
        <>
            <section id="middle">
                <div className="intro">
                    <div className="intro-head">
                        <h1>I'm <strong>Chaitany Ghadigaonkar</strong></h1>
                        <h2>Web Developer</h2>
                    </div>

                    <button className="contact-me">
                        Download CV
                    </button>
                </div>
                <div className="my-photo">

                </div>
            </section>
            <div className="About">
                <div className="about-container width-60 margin-auto">
                    <h1>About</h1>
                    <div className="ab-h1-para">
                        <div className="ab-line"></div>
                        <div className="about-para">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque neque sapiente atque
                                nesciunt dicta, iste repellat minima vel ipsam corporis odio soluta quibusdam adipisci esse
                                perspiciatis rem aperiam. Cum explicabo modi iste nesciunt, maxime nulla laboriosam, tempore
                                voluptas inventore consequuntur, pariatur libero saepe temporibus fugit excepturi distinctio
                                accusantium? Debitis eaque reprehenderit quis enim quibusdam nam perspiciatis tenetur sint,
                                perferendis officiis, dignissimos molestias saepe recusandae neque vero mollitia voluptatum,
                                nulla eius!</p>
                        </div>
                    </div>
                </div>
                <div className="my-skills width-80 margin-auto">
                    <h1>My Skills</h1>

                    <div className="skill-box width-60 margin-auto">
                        <SkillBox imgSrc={reactImg} h2="React Js" />
                        <SkillBox imgSrc={mongoDB} h2="Mongo DB" />
                        <SkillBox imgSrc={node} h2="Node Js" />
                        <SkillBox imgSrc={javascript} h2="JavaScript" />
                    </div>
                    <div className="skill-box width-60 margin-auto">
                        <SkillBox imgSrc={css} h2="CSS 3" />
                        <SkillBox imgSrc={html} h2="HTML 5" />
                        <SkillBox imgSrc={java} h2="Java" />

                    </div>
                </div>
            </div>

            
        </>
    )
}
