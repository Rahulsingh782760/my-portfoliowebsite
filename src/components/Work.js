import React from "react";
import '../components/WorkCardStyle.css';
import WorkCard from './WorkCard.js';
import WorkData from './WorkData.js';

const Work = () => {
    return (
        <div className="work_container">
            <h1>Projects</h1>
            <div className="project_container">
                {
                    WorkData.map((curr) => {
                        return (
                            <div>
                                <WorkCard
                                    imgsrc={curr.imgsrc}
                                    title={curr.title}
                                    text={curr.text}
                                    view={curr.view}
                                />
                            </div>

                        )
                    })
                }

            </div>

        </div>
    );
}

export default Work;

