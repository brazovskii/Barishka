import React, {FC} from "react";
import "../../../components/ButtonHeader/style.scss";
import {useHistory} from "react-router-dom";

const ButtonHome: FC = () => {
    const history = useHistory();
    const onBtnHome = () => {
        history.push(`/home`);
    };
    return (
        <button
            className="btnHeader"
            onClick={() => {
                onBtnHome();
            }}
        >
            Home
        </button>
    );
};

export default ButtonHome;
