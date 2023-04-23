import { StyledButton } from "./Button.styled";

const Button = ({ children, color, bgColor, handleClick, style }) => {
  return (
    <StyledButton
      color={color}
      bgColor={bgColor}
      style={{ ...style }}
      onClick={() => handleClick()}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
