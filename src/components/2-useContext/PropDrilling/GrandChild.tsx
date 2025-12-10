import React, { useContext } from "react";
import type { UserType } from "./user.type";
import { UserContext } from "../UserContext/context/UserContext";

const GrandChild: React.FC<UserType> = ({ name }) => {
  const newName = useContext(UserContext);
  return (
    <div>
      <h1>GrandChild</h1>
      <p>{newName}</p>
      <p>Nama : {name}</p>
    </div>
  );
};

export default GrandChild;
