import React from "react";
// import {Carousel, CarouselItem} from 'react-bootstrap'
// import {clothesAPI} from "../../services/ClothesService";
//
// // interface ISlide {
// //     selectedIndex: number;
// //     event: Record<string, unknown> | null;
// //     onSelect?: (eventKey: number, event: Record<string, unknown> | null) => void;
// //     handleSelect?: (selectedIndex: number, event: Record<string, unknown> | null) => void;
// // }
//
// const Slider = () => {
//
//
//     const {data: clothes, isLoading} = clothesAPI.useGetClothesQuery("glass");
//     return (<Carousel style={{'margin': '3rem'}}>
//
//         {clothes && clothes.map(el => (<CarouselItem className={'slider'} key={el.id}>
//             <img className={'d-block w-100'} src={el.img} alt={el.descriptions}/>
//         </CarouselItem>))}
//     </Carousel>)
// };
// export default Slider;