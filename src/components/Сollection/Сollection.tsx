import React, { FC } from "react";
import ManAndGirl from "./FilterCollection/ManAndGirl";
import "./style.scss";

const Collection: FC = () => {
  return (
    <div className="collection">
      <ManAndGirl />
    </div>
  );
};

export default Collection;
