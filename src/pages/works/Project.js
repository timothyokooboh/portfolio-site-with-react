import { useParams } from "react-router-dom";
import useProjectDetails from "../../hooks/useProjectDetails";
import { ProjectContainer } from "./Project.styled";

const Project = () => {
    const projects = useProjectDetails()
    const { id  } = useParams()
    const project = projects.filter(item => item.id == id)

    return ( 
        <ProjectContainer>
            <img src={project[0].images[0]} alt={project.title} className="project-img"/>
            <h2>{ project[0].title }</h2>
            <div>{ project[0].description }</div>
            <div>
                <h3> Stack </h3>
                {
                    project[0].stack.map(stack => <span key={stack} className="tag"> { stack }</span>)
                }
            </div>
        </ProjectContainer>
    );
}
 
export default Project;