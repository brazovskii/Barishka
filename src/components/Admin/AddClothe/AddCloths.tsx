import React, {useState} from "react";
import {Link, Outlet} from "react-router-dom";
import './style.scss'
import {getAddress, getComments, getName, getPhone} from "../../../store/reducers/FormSlice";
import {clothesAPI} from "../../../services/ClothesService";


const AddClothe = () => {
    // const [createClothe, {}] = clothesAPI.useCreateClotheMutation();
    // const [price, setPrice] = useState(0)
    // const [img, setImg] = useState('')
    // const [descriptions, setDescriptions] = useState('')
    // const [category, setCategory] = useState('')
    // const [size, setSize] = useState([])
    // const [name, setName] = useState('')
    // const handleSubmitClothe = () => {
    //     createClothe({price, img, descriptions, name, category, size})
    // }
    //
    // return (<div>
    //     <p className={'order__p'}>Заполните данные:</p>
    //     <form onSubmit={handleSubmitClothe} className={'form'}>
    //         <input type="text" value={name}
    //                onChange={(e) => setName(e.target.value)} placeholder={'Human...'}
    //                className={'form__name'}/>
    //         <input type="text" value={price}
    //                onChange={(e) => setPrice(e.target.value)} placeholder={'Price...'}
    //                className={'form__name'}/>
    //         <input type="text" value={img} onChange={(e) => setImg(e.target.value)}
    //                placeholder={'img...'}
    //                className={'form__phone'}/>
    //         <input type="text" value={descriptions} onChange={(e) => setDescriptions(e.target.value)}
    //                placeholder={'descriptions...'}
    //                className={'form__address'}/>
    //         <input type="text" value={category}
    //                onChange={(e) => setCategory(e.target.value)} placeholder={'category...'}
    //                className={'form__name'}/>
    //         <input type="text" value={size} onChange={(e) => setSize([e.target.value])}
    //                placeholder={'size...'}
    //                className={'form__name'}/>
    //
    //
    //         <input type="submit" className={'form__btn'}/>
    //     </form>
    //     <Outlet/>
    // </div>)
}

export default AddClothe