import About from "../../about/About";
import ProjectList from "../../project/ProjectList";
import Skills from "../../skills/Skills";
import Footer from "../../footer/Footer";
import { StyledHome } from "./Home.styled";

const Home = () => {
    return ( 
        <StyledHome>
            <About />
            <div className="main-content">
                <Skills />
                <ProjectList />
                <Footer color="#000" />
            </div>
        </StyledHome>
    );
}
 
export default Home;