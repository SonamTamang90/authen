import clsx from "clsx";
import Link from "next/link";

const variants = {
  primary: clsx(
    "inline-flex items-center justify-center px-4 py-2",
    "rounded-full border border-transparent bg-gray-950 shadow-md",
    "text-base font-medium whitspace-nowrap text-white",
    "hover:bg-gray-800",
  ),
};

type ButtonProps = {
  variant?: keyof typeof variants;
  href?: string;
  children: React.ReactNode;
  className?: string;
};

const Button = ({
  variant = "primary",
  href,
  children,
  className,
  ...props
}: ButtonProps) => {
  className = clsx(className, variants[variant]);

  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
};

export default Button;
