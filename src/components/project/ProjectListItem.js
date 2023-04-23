import { StyledProjectImage } from "./ProjectList.styled";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { BsArrowsFullscreen } from "react-icons/bs";
import { useContext, useRef } from "react";
import { ImagePreviewContext } from "../../pages/app/App";
import { MdClose } from "react-icons/md";

const ProjectListItem = ({ project }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const imageContext = useContext(ImagePreviewContext);
  const imageRef = useRef(null);
  const closePreviewRef = useRef(null);

  const closePreview = () => {
    imageRef.current.classList.remove("preview");
    closePreviewRef.current.style.display = "none";
  };

  const showPreview = () => {
    imageRef.current.classList.add("preview");
    closePreviewRef.current.style.display = "block";
  };

  const navigate = useNavigate();
  let classes = ["project-item", inView ? "project-in-view" : ""];

  return (
    <div className={classes.join(" ")}>
      <StyledProjectImage>
        <img src={project.images[0]} ref={imageRef} />
        <div className="image-preview">
          <span
            className="image-preview__text cursor-pointer"
            onClick={() => showPreview(project.images[0])}
          >
            Preview image
          </span>
          <BsArrowsFullscreen
            className="cursor-pointer"
            onClick={() => showPreview(project.images[0])}
          />
        </div>

        <div className="close-preview" ref={closePreviewRef}>
          <Button
            bgColor="#FF6464"
            color="#fff"
            style={{ display: "flex", alignItems: "center" }}
            handleClick={closePreview}
          >
            <MdClose className="mr-sm" />
            <span>Close</span>
          </Button>
        </div>
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
