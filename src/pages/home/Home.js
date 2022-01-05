import About from "../../components/about/About";
import ProjectList from "../../components/project/ProjectList";
import Skills from "../../components/skills/Skills";
import useProjectDetails from "../../hooks/useProjectDetails";
import { StyledHome } from "./Home.styled";

const Home = () => {
    const projectDetails = useProjectDetails();
    const projects = projectDetails.filter(project => project.featured)
    
    return ( 
        <StyledHome>
            <About />
            <div className="main-content">
                <Skills />
                <div>
                    <h4 className="project-heading"> Featured works </h4>
                    <ProjectList projects={ projects }/>
                </div>
                
            </div>
        
        </StyledHome>
    );
}
 
export default Home;