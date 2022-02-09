import React, {FC, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {clothesAPI} from "../../../services/ClothesService";
import {deleteBasket} from "../../../store/reducers/BasketListSlice";
import './style.scss'

const RegistrationOrder = () => {
    const [createOrder, {}] = clothesAPI.useCreateOrderMutation();
    const {basket, count, total} = useAppSelector(state => state.basketList);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [comments, setComments] = useState("");
    const [checked, setChecked] = useState(false)
    const dispatch = useAppDispatch();

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        await createOrder({name, phone, address, comments, total, basket});
        dispatch(deleteBasket())
        alert(`${name},${phone},${address},${comments}`)
    }

    return (<div className={'order'}>
        <p className={'order__p'}>Заполните данные:</p>
        <form onSubmit={handleSubmit} className={'form'}>
            <input type="text" value={name}
                   onChange={(e) => setName(e.target.value)} placeholder={'Name...'} className={'form__name'}/>
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={'Phone...'}
                   className={'form__phone'}/>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder={'Address...'}
                   className={'form__address'}/>
            <textarea value={comments} onChange={(e) => setComments(e.target.value)} placeholder={'Comments...'}
                      className={'form__comments'}/>
            <p className={'form__total'}>Сумма заказа:</p>
            <p className={'form__sum'}>{`${total} РУБ.`}</p>
            <label className={'form__check'}>
                <input
                    name="isGoing"
                    type="checkbox"
                    checked={checked}
                    onChange={() => setChecked(!checked)}/>
                {'Согласен на все!'}
            </label>
            <input type="submit" className={'form__btn'}/>
        </form>
    </div>)
}

export default RegistrationOrder;