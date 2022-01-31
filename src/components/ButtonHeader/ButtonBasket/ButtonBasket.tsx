import React, { FC } from "react";
import "../../../components/ButtonHeader/style.scss";
import { useHistory } from "react-router-dom";

const ButtonBasket: FC = () => {
  const history = useHistory();
  const onBtnBasket = () => {
    history.push(`/basket`);
  };
  return (
    <button
      className="btnHeader"
      onClick={() => {
        onBtnBasket();
      }}
    >
      🛒| 0
    </button>
  );
};

export default ButtonBasket;
