import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

interface LinkComponentProps {
  to: string;
  content: React.ReactNode;
  className?: string;
  activeClassName?: string;
  exact?: boolean;
  style?: "button" | "nav" | "navLogin" | "";
  icon?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  variant?: string;
}

const NavigationLink: FC<LinkComponentProps> = ({
  to,
  className,
  style,
  content,
  iconLeft,
  iconRight,
  bgColor = "bg-primary-500",
  variant,
}) => {
  const location = useLocation();

  const isActive = location.pathname === to;
  if (style === "button") {
    if (variant === "outline") {
      return (
        <Link
          to={to}
          className={` text-primary-500 w-60  ${
            iconLeft || iconRight ? "flex items-center gap-3" : ""
          }  border border-primary-500  py-2 px-6 font-bold rounded-lg hover:opacity-90 text-center ${className}
        `}
        >
          {iconLeft}
          {content}
          {iconRight}
        </Link>
      );
    }
    return (
      <Link
        to={to}
        className={` ${bgColor} text-white  min-w-40 ${
          iconLeft || iconRight ? "flex items-center gap-3" : ""
        }   py-3 px-6 rounded-lg hover:opacity-90 text-center ${className}
        `}
      >
        {iconLeft}
        {content}
        {iconRight}
      </Link>
    );
  }
  if (style === "nav") {
    return (
      <Link
        to={to}
        className={`text-[#494949] hover:text-teal-600 text-base font-bold ${className} ${
          isActive ? "text-primary-500" : ""
        }`}
      >
        {content}
      </Link>
    );
  }
  if (style === "navLogin") {
    return (
      <Link
        to={to}
        className={` hover:text-teal-600 text-base font-bold border-b-2 border-b-transparent  ${className} ${
          isActive ? "text-primary-500 border-b-primary-500" : "text-[#888888]"
        }`}
      >
        {content}
      </Link>
    );
  }
  return (
    <Link to={to} className={`${className}`}>
      Link
    </Link>
  );
};
export default NavigationLink;
