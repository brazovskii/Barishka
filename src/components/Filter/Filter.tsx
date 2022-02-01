import React, {FC} from "react";
import "./style.scss";
import {Link} from "react-router-dom";
import {ILink} from "../../models/ILink";

const MASSLINK: ILink[] = [
    {id: 100, url: "outerwear", name: "Верхняя одежда"},
    {id: 101, url: "hudi", name: "Худи"},
    {id: 102, url: "trousers", name: "Брюки"},
    {id: 103, url: "futbolki", name: "Футболки"},
    {id: 104, url: "sneakers", name: "Кросовки"},
    {id: 105, url: "accessories", name: "Аксессуары"},
];

const Filter: FC = () => {
    return (
        <>
            <div className="filter">
                {MASSLINK.map((el) => {
                    return (
                        <Link to={`/girl/${el.url}`} key={el.id} className={"filter__link"}>
                            {el.name}
                        </Link>
                    );
                })}
            </div>
        </>
    );
};

export default Filter;
