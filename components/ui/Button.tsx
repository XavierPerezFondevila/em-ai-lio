import React from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  loading?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  icon,
  loading = false,
  fullWidth = false,
  children,
  disabled,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium rounded-md border transition-all duration-150 ease-in-out cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants: Record<ButtonVariant, string> = {
    primary: [
      "bg-(--color-btn-primary-bg)",
      "text-(--color-btn-primary-text)",
      "border-(--color-btn-primary-border)",
      "hover:bg-(--color-btn-primary-hover)",
      "focus-visible:ring-(--color-btn-primary-bg)",
    ].join(" "),

    secondary: [
      "bg-(--color-btn-secondary-bg)",
      "text-(--color-btn-secondary-text)",
      "border-(--color-btn-secondary-border)",
      "hover:bg-(--color-btn-secondary-hover)",
      "focus-visible:ring-(--color-btn-primary-bg)",
    ].join(" "),

    ghost: [
      "bg-transparent",
      "text-(--color-btn-ghost-text)",
      "border-transparent",
      "hover:bg-(--color-btn-ghost-hover)",
      "focus-visible:ring-(--color-btn-primary-bg)",
    ].join(" "),

    danger: [
      "bg-(--color-btn-danger-bg)",
      "text-white",
      "border-(--color-btn-danger-border)",
      "hover:bg-(--color-btn-danger-hover)",
      "focus-visible:ring-(--color-btn-danger-bg)",
    ].join(" "),
  };

  const sizes: Record<ButtonSize, string> = {
    sm: "px-3 py-1.5 text-xs h-7",
    md: "px-4 py-2 text-sm h-9",
    lg: "px-5 py-2.5 text-base h-11",
  };

  return (
    <button
      className={[
        base,
        variants[variant],
        sizes[size],
        fullWidth ? "w-full" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
      ) : (
        icon && <span className="shrink-0">{icon}</span>
      )}
      {children}
    </button>
  );
}
