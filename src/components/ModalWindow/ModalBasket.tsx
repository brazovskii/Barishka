import React, {FC} from "react";
import "./style.scss";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getModal} from "../../store/reducers/UrlSlice";

type IModalBasket = {
    active: boolean;
    setActive: (active: boolean) => void;
}

const ModalBasket: FC<IModalBasket> = ({active, setActive, children}) => {
    const {modal} = useAppSelector(state => state.url)
    const dispatch = useAppDispatch()
    const onHandledClick = () => {
        setActive(false)
        dispatch(getModal(false))
    }
    return (
        <div className={active ? 'modal active' : "modal"} onClick={() => onHandledClick()}>
            <div className={active ? 'modal__content active' : "modal__content"}
                 onClick={e => e.stopPropagation()}>
                <div className={'modal__body'}>
                    <button className={'modal__close'} onClick={() => onHandledClick()}>{'⮿'}</button>
                </div>
                {children}
            </div>
        </div>
    )
}

export default ModalBasket;