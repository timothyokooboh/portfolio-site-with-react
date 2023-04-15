import { useParams } from "react-router-dom";
import useProjectDetails from "../../hooks/useProjectDetails";
import { ProjectContainer } from "./Project.styled";

const Project = () => {
  const projects = useProjectDetails();
  const { id } = useParams();
  const project = projects.filter((item) => String(item.id) === id);

  return (
    <ProjectContainer>
      <img
        src={project[0].images[0]}
        className="project-img"
        alt={project[0].title}
      ></img>
      <h2>{project[0].title}</h2>
      <div className="description">{project[0].description}</div>
      <div className="sub-heading">
        <h3> Stack </h3>
        {project[0].stack.map((stack, idx) => (
          <span key={stack} className="tag">
            {" "}
            {stack}
            {idx < project[0].stack.length - 1 && <span>,</span>}
          </span>
        ))}
      </div>

      <div className="sub-heading purpose">
        <div className="mr-lg">
          <h3> Purpose </h3>
          <div className="purpose__content"> {project[0].purpose} </div>
        </div>
        <img src={project[0].images[1]} alt={project[0].title} />
      </div>

      <div className="sub-heading">
        <h3> Challenges and thought process </h3>
        <div className="challenges">{project[0].challenges}</div>
      </div>

      <div className="sub-heading lessons-learned">
        <img src={project[0].images[2]} alt={project[0].title} />
        <div className="ml-lg lessons-learned__text">
          <h3> Lessons learned </h3>
          <div class="lessons-learned__content">
            {" "}
            {project[0].lessonsLearned}{" "}
          </div>
        </div>
      </div>
    </ProjectContainer>
  );
};

export default Project;
