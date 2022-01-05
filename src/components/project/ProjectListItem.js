import { StyledProjectImage } from "./ProjectList.styled";
import Button from "../button/Button";

const ProjectListItem = ({ project}) => {
    return ( 
        <div key={ project.id } className="project-item" >
            <StyledProjectImage image={ project.images[0] } > </StyledProjectImage> 
        
            <div className="project-content">
                <h4>{ project.title }</h4> 
                <div className="description">{ project.description }</div> 
                <div style={{ display: 'flex' }}>
                    <div style={{marginRight: '10px'}} >
                        <Button text="Read more" bgColor="#FF6464" color="#fff"></Button>
                    </div>
                    <div>
                        <Button text="View project" bgColor="#fff" color="#FF6464"></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ProjectListItem;