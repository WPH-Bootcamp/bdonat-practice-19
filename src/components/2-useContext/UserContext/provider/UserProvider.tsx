import { type PropsWithChildren } from "react";
import { UserContext } from "../context/UserContext";

export const UserProvider = ({ children }: PropsWithChildren) => {
  const name = "UCUP";
  return <UserContext.Provider value={name}>{children}</UserContext.Provider>;
};
