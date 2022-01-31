import React, {FC} from "react";
import "./style.scss";
import {Outlet, Link} from "react-router-dom";

const links = [{id:1,url: '/',name:'Home'},{id:1,url: '/man',name:'Home'},{id:1,url: '/girl',name:'Home'},{id:1,url: '/basket',name:'Home'}]

const Layout: FC = () => {

    return (
        <div className={'head'}>
            <div className="nav">
                <Link to={'/'}
                      className="btnHeader"
                >
                    Home
                </Link>
                <Link to={'/man'}
                      className="btnHeader"
                >
                    Man
                </Link>
                <Link to={'/girl'}
                      className="btnHeader"
                >
                    Girl
                </Link>
                <input
                    type="text"
                    className="inputSearch"
                    placeholder=" Search..."
                    // onChange={() => {
                    //   onInputSearch();
                    // }}
                />
                <Link to={'/basket'}
                      className="btnHeader"
                >
                    🛒| 0
                </Link>
            </div>
            <Outlet/>
        </div>
    );
};

export default Layout;
