
import { StyledFooter } from './Footer.styled';
import { FaGithub, FaTwitter, FaLinkedin} from "react-icons/fa"
const Footer = () => {
    const socialLinks = [
        {
            link: "https://www.linkedin.com/in/timothy-okooboh-193980165/",
            icon: <FaLinkedin />,
            id: 1
        },
        {
            link: "https://github.com/timothyokooboh",
            icon: <FaGithub />,
            id: 2,
        },
        {
            link: "http://twitter.com/inspiretim24",
            icon: <FaTwitter />,
            id: 3
        }
    ]
    return ( 
        <StyledFooter color="white">
            {
               socialLinks.length && socialLinks.map(({link, icon, id}) => <a key={id} href={link} target="_blank" rel="noreferrer">{ icon }</a> )
            }
        </StyledFooter>
    );
}
 
export default Footer;