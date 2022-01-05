import useProjectDetails from "../../hooks/useProjectDetails";
import ProjectList from "../../components/project/ProjectList";

const Works = () => {
    const projects = useProjectDetails()
    return <ProjectList projects={projects} />
}
 
export default Works;