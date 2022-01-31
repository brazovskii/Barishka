import React, { FC } from "react";
import "./style.scss";
import { useHistory } from "react-router-dom";

const ManAndGirl: FC = () => {
  const history = useHistory();

  const onBtnFilterMan = () => {
    history.push(`/collection/man`);
  };

  const onBtnFilterGirl = () => {
    history.push(`/collection/girl`);
  };
  return (
    <>
      <button
        className="manAndGirl"
        onClick={() => {
          onBtnFilterMan();
        }}
      >
        Мужское
      </button>
      <button
        className="manAndGirl"
        onClick={() => {
          onBtnFilterGirl();
        }}
      >
        Женское
      </button>
    </>
  );
};

export default ManAndGirl;
