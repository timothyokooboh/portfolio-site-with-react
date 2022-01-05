import { StyledButton } from "./Button.styled";

const Button = ({ text, color, bgColor }) => {
    return ( 
        <StyledButton color={color} bgColor={bgColor}>
            { text}
        </StyledButton>
     );
}
 
export default Button;