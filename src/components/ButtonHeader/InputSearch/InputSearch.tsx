import React, { FC } from "react";
import "../../../components/ButtonHeader/style.scss";
import { useHistory} from "react-router-dom";

const InputSearch: FC = () => {
  const history = useHistory();
  const onInputSearch = () => {
    history.push(`/search`);
  };
  return (
    <input
      type="text"
      className="inputSearch"
      placeholder=" Search..."
      onChange={() => {
        onInputSearch();
      }}
    />
  );
};

export default InputSearch;
