import { StyledFooterLink } from "./Footer.styled";

const SocialLink = ({ id, link, icon, color }) => {
    return <StyledFooterLink 
            key={id} 
            href={link} 
            target="_blank" 
            rel="noreferrer"
            color={ color } 
        >
            { icon }
        </StyledFooterLink> 
}
 
export default SocialLink;