import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string | null;
      email: string;

      image: string;
      role: $Enums.Role;

      createdAt: Date;
      updatedAt: Date;

      stripeCustomerId: string;
      stripeSubscriptionId: string;
      stripePriceId: string;
      stripeCurrentPeriodEnd: Date;
    };
  }
}
