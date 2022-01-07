import { StyledButton } from "./Button.styled";

const Button = ({ children, color, bgColor, handleClick }) => {
    return ( 
        <StyledButton color={color} bgColor={bgColor} onClick={() => handleClick()}>
            { children }
        </StyledButton>
     );
}
 
export default Button;