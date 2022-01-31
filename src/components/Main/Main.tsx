import React, { FC } from "react";
import ButtonCollection from "../ButtonHeader/ButtonСollection/ButtonCollection";
import ButtonBasket from "../ButtonHeader/ButtonBasket/ButtonBasket";
import ButtonHome from "../ButtonHeader/ButtonHome/ButtonHome";
import ButtonLocation from "../ButtonHeader/ButtonLocation/ButtonLocation";
import InputSearch from "../ButtonHeader/InputSearch/InputSearch";
import "./style.scss";

const Main: FC = () => {
  return (
    <div className="nav">
      <ButtonHome />
      <ButtonCollection />
      <ButtonLocation />
      <InputSearch />
      <ButtonBasket />
    </div>
  );
};

export default Main;
