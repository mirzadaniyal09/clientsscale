type ButtonProps = {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost';
    className?: string;
    to?: string;
    type?: 'button' | 'submit' | 'reset';
};

export default function Button({
    children,
    variant = 'primary',
    className = '',
    to,
    type = 'button',
}: ButtonProps) {
    const classes = {
        primary: 'bg-sky-600 text-white hover:bg-sky-700',
        secondary: 'bg-slate-900 text-white hover:bg-slate-800',
        ghost: 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50',
    };

    const shared = `inline-flex items-center justify-center rounded-full px-5 py-3 font-semibold transition ${classes[variant]} ${className}`;

    if (to) {
        return <a href={to} className={shared}>{children}</a>;
    }

    return (
        <button type={type} className={shared}>
            {children}
        </button>
    );
}
