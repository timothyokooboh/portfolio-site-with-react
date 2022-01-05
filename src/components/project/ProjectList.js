
import { StyledProjectList } from "./ProjectList.styled";
import ProjectListItem from "./ProjectListItem";

const ProjectList = ({ projects }) => {
    return ( 
        <StyledProjectList>
            {
                projects.length && projects.map(featuredProject => <ProjectListItem key={featuredProject.id} project={ featuredProject } />)
            }
        </StyledProjectList>
    );
}
 
export default ProjectList;