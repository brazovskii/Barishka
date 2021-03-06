import React, {FC} from "react";
import "./style.scss";
import {useSearchParams} from "react-router-dom";
import Card from "../CardProduct/Card/Card";
import {clothesAPI} from "../../services/ClothesService";

const Search: FC = () => {
    const {data: clothes} = clothesAPI.useGetClothesQuery("clothes");
    let [searchParams] = useSearchParams();
    return (
        <>
            <div className="main__body">
                {clothes && clothes
                    .filter(clothe => {
                        let filterDescription = searchParams.get("description") ?? '';
                        if (!filterDescription) return true;
                        let description = clothe.descriptions.toLowerCase();
                        return description.toLowerCase().includes(filterDescription.toLowerCase());
                    })
                    .map(invoice =>
                        <Card
                            descriptions={invoice.descriptions}
                            category={invoice.category}
                            img={invoice.img}
                            price={invoice.price}
                            id={invoice.id}
                            key={invoice.id}
                        >
                            {invoice.name}
                        </Card>)}
            </div>
        </>
    );
};

export default Search;
