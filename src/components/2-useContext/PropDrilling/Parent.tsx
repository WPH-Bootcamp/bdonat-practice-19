import React, { useContext } from "react";
import Child from "./Child";
import type { UserType } from "./user.type";
import { UserContext } from "../UserContext/context/UserContext";

const Parent: React.FC<UserType> = ({ name }) => {
  const newName = useContext(UserContext);
  return (
    <div>
      <h1>Parent</h1>
      <p>{newName}</p>
      <Child name={name} />
    </div>
  );
};

export default Parent;
