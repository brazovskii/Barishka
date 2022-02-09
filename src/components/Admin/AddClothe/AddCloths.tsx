import React, {useState} from "react";
import {Outlet} from "react-router-dom";
import './style.scss'
import {clothesAPI} from "../../../services/ClothesService";


const AddClothe = () => {
    const [createClothe, {}] = clothesAPI.useCreateClotheMutation();
    const [price, setPrice] = useState('')
    const [img, setImg] = useState('')
    const [descriptions, setDescriptions] = useState('')
    const [category, setCategory] = useState('')
    const [name, setName] = useState('')
    const [size, setSize] = useState([''])
    const handleSubmitClothe = () => {
        // @ts-ignore
        createClothe({price, img, descriptions, name, category, size})
    }


    return (<div className={'order__add'}>
        <p className={'order__p'}>Заполните данные:</p>
        <form onSubmit={handleSubmitClothe} className={'form'}>
            <input type="text" value={name}
                   onChange={(e) => setName(e.target.value)} placeholder={'Human...'}
                   className={'form__name'}/>
            <input type="text" value={price}
                   onChange={(e) => setPrice(e.target.value)} placeholder={'Price...'}
                   className={'form__name'}/>
            <input type="text" value={img} onChange={(e) => setImg(e.target.value)}
                   placeholder={'img...'}
                   className={'form__phone'}/>
            <input type="text" value={descriptions} onChange={(e) => setDescriptions(e.target.value)}
                   placeholder={'descriptions...'}
                   className={'form__address'}/>
            <input type="text" value={category}
                   onChange={(e) => setCategory(e.target.value)} placeholder={'category...'}
                   className={'form__name'}/>
            <input type="text" value={size} onChange={(e) => setSize([e.target.value])}
                   placeholder={'size...'}
                   className={'form__name'}/>


            <input type="submit" className={'form__btn'}/>
        </form>
        <Outlet/>
    </div>)
}

export default AddClothe