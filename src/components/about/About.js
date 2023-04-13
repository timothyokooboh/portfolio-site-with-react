
import { StyledAbout } from './About.styled';
import CvDownloadButton from './CvDownloadButton';

const About = () => {

    const handleClick = (id) => {
        const cv = document.querySelector(id);
        cv.click();
    }

    return ( 
        <StyledAbout>
            <div>
                <h1>Hi, I am Timothy Okooboh</h1>
                <h2>Frontend Engineer & Technical Writer</h2>
                
                <div className='description'>
                    <div> I am a self-taught frontend developer with a passion for solving real-world problems. </div>
                    <div> I love to create beautiful and functional web applications.</div>
                    <div>
                        <span> I currently work as a Frontend Engineer at </span>
                        <a href='https://seamlesshr.com/' target="_blank" rel="noreferrer">
                            SeamlessHR
                        </a>
                    </div>
                </div>

                <CvDownloadButton downloadCV={handleClick}></CvDownloadButton>
            </div>
            <div className='img-container'>
                <img src="../timothy.png" alt=" timothy okoooboh" />
            </div>
        </StyledAbout>
     );
}
 
export default About;