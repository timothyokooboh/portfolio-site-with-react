import useProjectDetails from "../../hooks/useProjectDetails";
import { StyledProjectList } from "./ProjectList.styled";
import ProjectListItem from "./ProjectListItem";

const ProjectList = () => {
    const projectDetails = useProjectDetails();

    return ( 
        <StyledProjectList>
            <h4> Featured works </h4>
            {
                projectDetails.length && projectDetails.filter(project => project.featured).map(featuredProject => <ProjectListItem key={featuredProject.id} project={ featuredProject } />)
            }
        </StyledProjectList>
    );
}
 
export default ProjectList;