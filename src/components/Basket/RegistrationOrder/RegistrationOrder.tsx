import React, {useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {clothesAPI} from "../../../services/ClothesService";
import {deleteBasket} from "../../../store/reducers/BasketListSlice";
import './style.scss'
import {getAddress, getComments, getName, getPhone, resetForm} from "../../../store/reducers/FormSlice";
import {getModal} from "../../../store/reducers/UrlSlice";

const RegistrationOrder = () => {
    const [createOrder] = clothesAPI.useCreateOrderMutation();
    const {basket, total} = useAppSelector(state => state.basketList);
    const {name, phone, address, comments} = useAppSelector(state => state.formList)
    const [checked, setChecked] = useState(false)
    const dispatch = useAppDispatch();

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        await createOrder({name, phone, address, comments, total, basket});
        dispatch(deleteBasket())
        dispatch(resetForm())
        dispatch(getModal(false))

    }

    return (<div className={'order'}>
        <p className={'order__p'}>Заполните данные:</p>
        <form onSubmit={handleSubmit} className={'form'}>
            <input type="text" value={name}
                   onChange={(e) => dispatch(getName(e.target.value))} placeholder={'Name...'}
                   className={'form__name'}/>
            <input type="text" value={phone} onChange={(e) => dispatch(getPhone(e.target.value))}
                   placeholder={'Phone...'}
                   className={'form__phone'}/>
            <input type="text" value={address} onChange={(e) => dispatch(getAddress(e.target.value))}
                   placeholder={'Address...'}
                   className={'form__address'}/>
            <textarea value={comments} onChange={(e) => dispatch(getComments(e.target.value))}
                      placeholder={'Comments...'}
                      className={'form__comments'}/>
            <div className={'form__price'}><p className={'form__total'}>Сумма заказа:</p>
                <p className={'form__sum'}>{`${total} РУБ.`}</p></div>

            <label className={'form__check'}>
                <input
                    name="isGoing"
                    type="checkbox"
                    checked={checked}
                    onChange={() => setChecked(!checked)}/>
                {'Согласен на все!'}
            </label>
            <input type="submit" className={'form__btn'} disabled={!checked}/>
        </form>
    </div>)
}

export default RegistrationOrder;