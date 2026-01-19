import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const NavLink = ({ to, className, children, ...props }) => {
  const location = useLocation();
  const active = location.pathname === to;

  return (
    <Link to={to} className={cn("px-3 py-2 rounded-md text-sm font-medium", className, active && "bg-primary/10") } {...props}>
      {children}
    </Link>
  );
};

export default NavLink;
