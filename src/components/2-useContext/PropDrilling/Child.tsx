import React, { useContext } from "react";
import GrandChild from "./GrandChild";
import type { UserType } from "./user.type";
import { UserContext } from "../UserContext/context/UserContext";

const Child: React.FC<UserType> = ({ name }) => {
  const newName = useContext(UserContext);
  return (
    <div>
      <h1>Child</h1>
      <p>{newName}</p>
      <GrandChild name={name} />
    </div>
  );
};

export default Child;
