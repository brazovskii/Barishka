import React, { FC } from "react";
import "../../../components/ButtonHeader/style.scss";
import { useHistory ,Link } from "react-router-dom";

const ButtonBasket: FC = () => {

  return (
    <Link to='/basket'
      className="btnHeader"
    >
      🛒| 0
    </Link>
  );
};

export default ButtonBasket;
