import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-label-md font-label-md transition-all duration-300 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-primary text-on-primary hover:shadow-lg hover:scale-105 border border-white/20",
        outline:
          "border border-primary text-primary hover:bg-primary hover:text-white shadow-sm",
        outlineVariant:
          "border border-outline-variant text-on-surface hover:bg-surface-variant shadow-sm",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-6 py-2",
        sm: "px-4 py-1.5 text-xs",
        lg: "px-8 py-4",
        xl: "px-10 py-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // Để an toàn khi không cài @radix-ui/react-slot
    if (asChild) {
      console.warn("asChild is not fully supported without @radix-ui/react-slot package");
    }
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
