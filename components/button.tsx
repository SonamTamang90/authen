import clsx from "clsx";
import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

const variants = {
  primary: clsx(
    "inline-flex items-center justify-center px-4 py-2",
    "rounded-full border border-transparent bg-gray-950 shadow-md",
    "text-base font-medium whitspace-nowrap text-white",
    "hover:bg-gray-800",
  ),
  outline: clsx(
    "rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-950 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus-visible:ring-transparent",
  ),
};

type BaseProps = {
  variant?: keyof typeof variants;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLinkProps = BaseProps & {
  href: string;
  target?: string;
  rel?: string;
};

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const Button = (props: ButtonProps) => {
  const { variant = "primary", className, children, ...rest } = props;
  const combinedClassName = clsx(className, variants[variant]);

  const isLink = "href" in props && props.href !== undefined;

  if (isLink) {
    const { href, target, rel } = props as ButtonAsLinkProps;
    return (
      <Link href={href} target={target} rel={rel} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button {...(rest as ButtonAsButtonProps)} className={combinedClassName}>
      {children}
    </button>
  );
};

export default Button;
