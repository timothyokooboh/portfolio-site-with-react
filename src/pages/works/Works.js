import useProjectDetails from "../../hooks/useProjectDetails";
import ProjectList from "../../components/project/ProjectList";
import { Outlet } from "react-router-dom";

const Works = () => {
    const projects = useProjectDetails()
    return (
        <>
            <ProjectList projects={projects} />
            <Outlet />
        </>
    )
}
 
export default Works;