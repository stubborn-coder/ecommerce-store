import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{}
const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type="button",
    ...props
},ref) => {
    return (
        <button className={cn(`w-auto rounder-full bg-black border-transparent px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-white  font-semibold hober:opacity-75 transition`,className)}
            ref={ref}
            {...props}
            disabled={disabled}
        >
            {children}
        </button>
    )
});

Button.displayName = "Button";

export default Button;