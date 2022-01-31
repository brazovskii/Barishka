import React, { FC } from "react";
import "./style.scss";
import { Link, Outlet, useParams } from "react-router-dom";
import { ILink } from "../../../../models/ILink";

const MASSLINK: ILink[] = [
  { id: 100, url: "/outerwear", name: "Верхняя одежда" },
  { id: 101, url: "/hudi", name: "Брюки" },
  { id: 102, url: "/trousers", name: "Худи" },
  { id: 103, url: "/futbolki", name: "Футболки" },
  { id: 104, url: "/sneakers", name: "Кросовки" },
  { id: 505, url: "/accessories", name: "Аксессуары" },
];

const Filter: FC = () => {
  const params = useParams();
  return (
    <>
      <div className="filter">
        {MASSLINK.map((el) => {
          return (
            <Link to={el.url} key={el.id} className={"filter__link"}>
              {el.name}
            </Link>
          );
        })}
      </div>
      <Outlet />
    </>
  );
};

export default Filter;
