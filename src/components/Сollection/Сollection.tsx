import React, {FC} from "react";
import "./style.scss";
import {Link, Outlet} from "react-router-dom";

const Collection: FC = () => {
    return (
        <>
            <div className="collection">
                <Link to={'/collection/girl'}
                      className="manAndGirl"
                >
                    Женское
                </Link>
                <Link to={'/collection/man'}
                      className="manAndGirl"
                >
                    Мужское
                </Link>
            </div>
            <Outlet/>
        </>
    );
};

export default Collection;
