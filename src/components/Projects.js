import image from '../assets/images/callsense.png'
import {Link} from "react-router-dom";
import {ProjectDescription} from "./ProjectDescription";
import {useMyInformation} from "../context/PersonalInfoContext";

const projects = [
    {
        id: 1,
        projectTitle: "Call Center Application",
        projectDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci culpa fugit illo ipsa iusto nemo nostrum optio quibusdam, quo quod  voluptate voluptatem, voluptates. Commodi id ipsam iste quo rem!",
        liveLink: 'https://www.callsense.ai',
        imageLink: 'https://www.callsense.ai/assets/logo/callsense.png'
    },
    {
        id: 2,
        projectTitle: "Call Center Application",
        projectDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci culpa fugit illo ipsa iusto nemo nostrum optio quibusdam, quo quod  voluptate voluptatem, voluptates. Commodi id ipsam iste quo rem!",
        liveLink: 'https://www.callsense.ai',
        imageLink: 'https://www.callsense.ai/assets/logo/callsense.png'
    }
]


function Projects() {
    const {myInfo} = useMyInformation()

    return (
        <div className={"bg-dark text-white"}>
            <div className="row d-flex align-items-center justify-content-between container">
                <div className="col-sm-12 col-lg-6 col-md-12">
                    <h1>Experienced Projects {myInfo.projectsCount}</h1>
                </div>
                <div className="col-sm-12 col-lg-6 col-md-12">
                    <Link style={{textDecoration: 'none'}} className={"text-white"} to={"/all-projects"}>
                        <button className="btn btn-light">View All Projects</button>
                    </Link>
                </div>
            </div>
            <div className="container row">
                {
                    projects.map(project=> {
                        return <ProjectDescription projectDescription={project.projectDescription} projectTitle={project.projectTitle} projectLiveLink={project.liveLink} image={project.imageLink} />
                    })
                }

            </div>
        </div>
    );
}

export default Projects;
