type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  to?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  to,
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) {
  const classes = {
    primary: "bg-sky-600 text-white hover:bg-sky-700",
    secondary: "bg-slate-900 text-white hover:bg-slate-800",
    ghost: "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50",
  };

  const shared = `inline-flex items-center justify-center rounded-full px-5 py-3 font-semibold transition ${classes[variant]} ${className} ${
    disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
  }`;

  if (to) {
    return (
      <a href={to} className={shared} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={shared}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
