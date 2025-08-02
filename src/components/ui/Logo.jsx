const Logo = ({ size = "md", className = "", textColor = "text-emerald-800" }) => {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10", 
    lg: "w-12 h-12"
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg className={sizes[size]} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" fill="#0B3D3A" stroke="#C9A86A" strokeWidth="2"/>
        <text x="20" y="26" textAnchor="middle" fill="#C9A86A" fontFamily="serif" fontSize="16" fontWeight="bold">S</text>
        <circle cx="20" cy="12" r="3" fill="#C9A86A" opacity="0.8"/>
        <circle cx="14" cy="16" r="2" fill="#C9A86A" opacity="0.6"/>
        <circle cx="26" cy="16" r="2" fill="#C9A86A" opacity="0.6"/>
      </svg>
      <span className={`font-heading text-2xl font-bold ${textColor}`}>
        Sauma Scents
      </span>
    </div>
  );
};

export default Logo;