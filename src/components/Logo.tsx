import React from "react";
import { Link } from "react-router-dom";
import { TrendingUp, Zap } from "lucide-react";

const Logo = ({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) => {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl",
  };

  const iconSizes = {
    sm: "w-5 h-5",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };
  const zapSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  return (
    <Link to="/" className="hover:opacity-80 transition-opacity">
      <div className={`flex items-center space-x-2 ${className}`}>
        <div className="relative">
          <TrendingUp className={`${iconSizes[size]} text-blue-600`} />
          <Zap
            className={`text-orange-500 absolute -top-1 -right-1 ${zapSizes[size]}`}
          />
        </div>
        <span
          className={`font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent ${sizeClasses[size]}`}
        >
          LeanChain
        </span>
      </div>
    </Link>
  );
};

export default Logo;
