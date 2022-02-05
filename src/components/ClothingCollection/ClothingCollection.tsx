import Filter from "../Filter/Filter";
import Card from "../CardProduct/Card/Card";
import {useAppSelector} from "../../hooks/redux";
import {Link, useSearchParams} from "react-router-dom";
import "./style.scss";
import {clothesAPI} from "../../services/ClothesService";


const ClothingCollection = () => {
    const {urlHuman} = useAppSelector(state => state.urlReducer)
    const {data: clothes, isLoading} = clothesAPI.useGetClothesQuery("clothes");
    let [searchParams] = useSearchParams();
    return (
        <>
            <Filter/>
            <div className="main__body">
                {isLoading && <div className={'main__loader'}><img
                    src="https://miro.medium.com/max/2400/1*5ngZiNtGMrp_xmZHxSvJ0g.gif" alt="loader"/></div>}
                {clothes && clothes
                    .filter(clothe => {
                        let filterDescription = searchParams.get("description") ?? '';
                        let filterCategory = searchParams.get("category") ?? '';
                        if (!filterCategory && !filterDescription) return true;
                        let description = clothe.descriptions.toLowerCase();
                        let category = clothe.category.toLowerCase();
                        return category.toLowerCase().includes(filterCategory.toLowerCase()) && description.toLowerCase().includes(filterDescription.toLowerCase());
                    })
                    .map(invoice =>
                        invoice.name === urlHuman ?
                            <Card
                                descriptions={invoice.descriptions}
                                category={invoice.category}
                                img={invoice.img}
                                price={invoice.price}
                                id={invoice.id}
                                key={invoice.id}
                            >
                                {invoice.name}
                            </Card> : '')}
            </div>
        </>
    );
};

export default ClothingCollection;
