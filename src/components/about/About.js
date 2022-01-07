
import { StyledAbout } from './About.styled';
import Button from "../button/Button";

const About = () => {
    return ( 
        <StyledAbout>
            <div>
                <h1>
                    Hi, I am Timothy, <br></br>
                    Frontend Engineer
                </h1>
                <div className='description'>
                    <div> I am a self-taught frontend developer with a passion for solving real-world problems. </div>
                    <div> I love to create beautiful and functional web applications.</div>
                    <div>
                        <span> I am currently working as a Frontend Engineer at </span>
                        <a href='https://seamlesshr.com/' target="_blank" rel="noreferrer">
                            SeamlessHR
                        </a>
                    </div>
                </div>
                <Button 
                    bgColor="#FF6464" 
                    color="#fff"
                >
                        Download resume
                </Button>
            </div>
            <div className='img-container'>
                <img src="../timothy.png" alt=" timothy okoooboh" />
            </div>
        </StyledAbout>
     );
}
 
export default About;