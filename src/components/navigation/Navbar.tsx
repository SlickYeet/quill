import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { ArrowRight } from "lucide-react";

import { authOptions } from "@/lib/auth/authOptions";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { buttonVariants } from "../ui/Button";
import { SignIn } from "../auth/Buttons";
import UserAccountNav from "./UserAccountNav";
import MobileNav from "./MobileNav";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <nav className="sticky inset-x-0 top-0 z-30 h-14 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="z-40 flex font-semibold">
            quill.
          </Link>

          <MobileNav isAuth={!!user} />

          <div className="hidden items-center space-x-4 sm:flex">
            {!user ? (
              <>
                <Link
                  href="/pricing"
                  className={buttonVariants({ variant: "ghost", size: "sm" })}
                >
                  Pricing
                </Link>

                <SignIn
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                />
                <Link
                  href="/auth/register"
                  className={buttonVariants({ size: "sm" })}
                >
                  Get Started
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/dashboard"
                  className={buttonVariants({ variant: "ghost", size: "sm" })}
                >
                  Dashboard
                </Link>
                <UserAccountNav
                  name={!user.name ? "Your Account" : `${user.name}`}
                  email={user.email ?? ""}
                  imageUrl={user.image ?? ""}
                />
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
