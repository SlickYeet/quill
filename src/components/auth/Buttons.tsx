"use client";

import { FC, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { signIn, signOut } from "next-auth/react";

import { cn } from "@/lib/utils";

interface ButtonProps {
  className?: string;
  children?: ReactNode;
}

export const SignIn: FC<ButtonProps> = ({ className, children }) => {
  const pathname = usePathname();

  return (
    <button
      className={cn("", className)}
      onClick={() =>
        signIn(undefined, {
          callbackUrl: pathname === "/" ? "/dashboard" : undefined,
        })
      }
    >
      {children ? children : <span className={cn("", className)}>Sign In</span>}
    </button>
  );
};

export const SignOut: FC<ButtonProps> = ({ className, children }) => {
  const pathname = usePathname();

  return (
    <button
      className={cn("", className)}
      onClick={() =>
        signOut({
          callbackUrl: pathname === "/dashboard" ? "/" : undefined,
        })
      }
    >
      {children ? (
        children
      ) : (
        <span className={cn("", className)}>Sign Out</span>
      )}
    </button>
  );
};
