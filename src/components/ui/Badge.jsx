const Badge = ({ children, variant = "new", className = "" }) => {
  const variants = {
    new: "bg-emerald-800 text-white",
    popular: "bg-gold-400 text-white",
    discount: "bg-red-500 text-white"
  };

  return (
    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;