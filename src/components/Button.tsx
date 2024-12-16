import { FC } from "react";

interface ButtonProps {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  loading?: boolean;
  ghost?: boolean;
  block?: boolean;
  shape?: "circle" | "round" | "default";
  size?: "small" | "middle" | "large";
  iconPosition?: "left" | "right";
  danger?: boolean;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  htmlType?: "button" | "submit" | "reset";
  blockLink?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  classNamePrefix?: string;
  sizePrefix?: string;
  blockPrefix?: string;
  iconPrefix?: string;
}
const Button: FC<ButtonProps> = () => {
  return <button>Click Me</button>;
};
export default Button;
