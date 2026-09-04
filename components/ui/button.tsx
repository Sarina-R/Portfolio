"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 border-[3px] border-ink font-bold transition-transform duration-150 ease-out active:translate-x-[3px] active:translate-y-[3px] active:shadow-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-pink text-cream shadow-brutal hover:-translate-y-0.5",
        secondary: "bg-cream text-ink shadow-brutal hover:-translate-y-0.5",
        dark: "bg-ink text-cream shadow-[7px_7px_0_0_#6E3FA6] hover:-translate-y-0.5",
        outline: "bg-transparent text-inherit border-current hover:bg-ink/5",
        ghost: "border-transparent hover:bg-ink/5",
      },
      size: {
        default: "px-5 py-3 text-sm",
        sm: "px-4 py-2 text-xs",
        lg: "px-6 py-4 text-base",
        icon: "h-11 w-11 p-0",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
