import React from 'react'

export default function ProjectItem(props) {
    const {href,activeImg,h1,descPara} = props;
    return (
        <>
            <div className="p-item">
                <div className="p-item-img">
                    <a href={href} target="_blank">
                        {/* <img src="./images/food-restorent.png" className="static" alt="" srcset="" /> */}
                        <img src={activeImg} className="active" alt="" srcset="" />
                    </a>
                </div>
                <div className="project-more-info">
                    <div className="proj-h1">
                        <h1>{h1}</h1>
                    </div>
                    <div className="proj-desc">
                        <p>{descPara}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
