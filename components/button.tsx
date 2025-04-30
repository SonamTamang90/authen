import clsx from "clsx";
import Link from "next/link";

const variants = {
  primary: clsx(
    "inline-flex items-center justify-center px-4 py-2",
    "rounded-full border border-transparent bg-gray-950 shawdow-md",
    "text-base font-medium whitespace-nowrap text-white",
    "hover:bg-gray-800",
  ),
};

type ButtonProps = {
  variant?: keyof typeof variants;
  className?: string;
  children?: React.ReactNode;
  href?: string;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "href">;

const Button = ({
  variant = "primary",
  className,
  children,
  href,
  ...props
}: ButtonProps) => {
  className = clsx(className, variants[variant]);
  if (href) {
    return (
      <Link href={href} className={className}>
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
