
import { StyledFooter } from './Footer.styled';
import { FaGithub, FaTwitter, FaLinkedin} from "react-icons/fa"
import SocialLink from './SocialLink';

const Footer = ({ color, bgColor }) => {
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
        <StyledFooter bgColor={bgColor} >
            <div className='links-container'>
                {
                socialLinks.length && socialLinks.map(({link, icon, id}) => {
                    return <SocialLink key={id} link={link} icon={icon} id={id} color={color} />
                    })
                }
            </div>

            <div className='copy-right'>
                Copyright &copy; {new Date().getFullYear()} Timothy Okooboh
            </div>
        </StyledFooter>
    );
}
 
export default Footer;