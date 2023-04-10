import { useMatch, useResolvedPath } from "react-router-dom";
import { StyledDesktopLink } from "./Navbar.styled";

const CustomLink = ({ children, to, style }) => {
    const resolvedPath = useResolvedPath(to);
    const match = useMatch({ path: resolvedPath.pathname, end: true });

    return ( 
        <StyledDesktopLink
            to={to}
            match={match}
            {...style}
        > 
            { children } 
        </StyledDesktopLink>
    );
}
 
export default CustomLink;