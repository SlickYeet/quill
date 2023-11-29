"use client";

import { PropsWithChildren } from "react";

import TRPCProvider from "./TRPCProvider";

const Providers = ({ children }: PropsWithChildren) => {
  return <TRPCProvider>{children}</TRPCProvider>;
};

export default Providers;
