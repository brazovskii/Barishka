import React, {FC} from "react";
import "../../../components/ButtonHeader/style.scss";
import {useHistory} from "react-router-dom";

const ButtonCollection: FC = () => {
    const history = useHistory();
    const onBtnCollection = () => {
        history.push(`/collection`);
    };
    return (
        <button
            className="btnHeader"
            onClick={() => {
                onBtnCollection();
            }}
        >
            Сollection
        </button>
    );
};

export default ButtonCollection;
