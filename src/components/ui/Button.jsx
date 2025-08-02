const Button = ({ children, variant = "primary", size = "md", onClick, className = "", ...props }) => {
  const baseClasses = "font-medium rounded-lg smooth-transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-emerald-800 text-white hover:bg-emerald-900 focus:ring-emerald-500",
    secondary: "bg-gold-400 text-white hover:bg-gold-500 focus:ring-gold-400",
    outline: "border-2 border-emerald-800 text-emerald-800 hover:bg-emerald-800 hover:text-white"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;