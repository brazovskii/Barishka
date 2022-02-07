import React from "react";
import "./style.scss";
import {Link} from "react-router-dom";
import {getUrlHuman} from "../../store/reducers/UrlSlice";
import {useAppDispatch} from "../../hooks/redux";
import {IHuman} from "../../models/IHuman";



const HUMAN: IHuman[] = [{
    name: 'girl',
    img: 'https://res.cloudinary.com/duzecrl3s/image/upload/v1644257647/woman_tt9ut6.jpg',
    description: 'Для Женщин',
    class: 'girl__p'
},
    {
        name: 'man',
        img: 'https://res.cloudinary.com/duzecrl3s/image/upload/v1644257653/man_jzccrd.jpg',
        description: 'Для Мужчин',
        class: 'man__p'
    }]

const Home = () => {
    const dispatch = useAppDispatch()
    return (
        <>
            <div className={'human'}>
                {HUMAN.map(el => {
                    return (
                        <Link to={`${el.name}`} onClick={() => {
                            dispatch(getUrlHuman(el.name))
                        }} key={el.name}>
                            <img className={el.name}
                                 src={el.img}
                                 alt={el.name}/>
                            <p className={el.class}>{el.description}</p>
                        </Link>
                    )
                })}
            </div>
        </>
    );
};

export default Home;
