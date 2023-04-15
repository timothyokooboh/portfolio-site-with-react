import { StyledProjectImage } from "./ProjectList.styled";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const ProjectListItem = ({ project }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const navigate = useNavigate();
  let classes = ["project-item", inView ? "project-in-view" : ""];

  return (
    <div className={classes.join(" ")} ref={ref}>
      <StyledProjectImage>
        <img src={project.images[0]} />
      </StyledProjectImage>

      <div className="project-content">
        <h4>{project.title}</h4>
        <div className="description">{project.description}</div>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "10px" }}>
            <Button
              bgColor="#FF6464"
              color="#fff"
              handleClick={() => navigate(`/works/${project.id}`)}
            >
              Read more
            </Button>
          </div>
          <div>
            <a href={project.url} target="_blank" rel="noreferrer">
              <Button bgColor="#fff" color="#FF6464">
                Visit web app
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectListItem;
