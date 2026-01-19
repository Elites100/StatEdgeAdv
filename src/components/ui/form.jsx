import * as React from "react";
import { FormProvider } from "react-hook-form";

import { cn } from "@/lib/utils";

// Minimal, JS-friendly form primitives to replace the original TS implementation.
export const Form = FormProvider;

// Simple placeholder: a field wrapper that renders children. Kept intentionally minimal.
export const FormField = ({ children, ...props }) => {
  return (
    <div {...props}>
      {children}
    </div>
  );
};

export const FormItem = ({ className, ...props }) => (
  <div className={cn("grid gap-1", className)} {...props} />
);

export const FormLabel = React.forwardRef(({ className, ...props }, ref) => (
  <Label ref={ref} className={cn("text-sm font-medium", className)} {...props} />
));
FormLabel.displayName = "FormLabel";

export const FormControl = ({ children, className, ...props }) => (
  <div className={cn("mt-1", className)} {...props}>
    {children}
  </div>
);
FormControl.displayName = "FormControl";

export const FormDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
FormDescription.displayName = "FormDescription";

export const FormMessage = React.forwardRef(({ className, children, ...props }, ref) => {
  // In this simplified version we just render children if present.
  if (!children) return null;

  return (
    <p ref={ref} className={cn("text-sm font-medium text-destructive", className)} {...props}>
      {children}
    </p>
  );
});
FormMessage.displayName = "FormMessage";

export const useFormField = () => ({ /* minimal stub: no-op in JS conversion */ });



