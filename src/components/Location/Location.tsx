import React, { FC } from "react";
import "./style.scss";

const Location: FC = () => {
  return (
    <div className="location">
      <h1>Минск,ул.Колесникова 17,корпус 1 помещение 1</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.7618205147023!2d27.43613628425848!3d53.92201790105184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbc4d027214557%3A0x916fb374dc01d46a!2z0YPQu9C40YbQsCDQmtC-0LvQtdGB0L3QuNC60L7QstCwIDE3LCDQnNC40L3RgdC6!5e0!3m2!1sru!2sby!4v1643122314756!5m2!1sru!2sby"
        className="google"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Location;
