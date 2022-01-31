import React, { FC } from "react";
import "../../../components/ButtonHeader/style.scss";
import { useHistory} from "react-router-dom";

const ButtonLocation: FC = () => {
  const history = useHistory();
  const onBtnLocation = () => {
    history.push(`/location`);
  };
  return (
    <button
      className="btnHeader"
      onClick={() => {
        onBtnLocation();
      }}
    >
      Location
    </button>
  );
};

export default ButtonLocation;
