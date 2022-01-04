import About from "../../about/About";
import Skills from "../../skills/Skills";
import { StyledHome } from "./Home.styled";

const Home = () => {
    return ( 
        <StyledHome>
            <About />
            <div className="main-content">
                <Skills />
            </div>
        </StyledHome>
    );
}
 
export default Home;