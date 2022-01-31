import React, {useState, useEffect, FC} from "react";

interface CardPhotos {
    id: number;
    price: number;
    img: string;
}

const Photos: FC = () => {
    const [photos, setPhotos] = useState<CardPhotos[]>([]);

    useEffect(() => {
        getPhotos();
    }, []);

    const getPhotos = async () => {
        const response = await fetch(`http://localhost:5000/girl`);
        const data = await response.json();
        setPhotos(data);
    };

    return (
        <div className="header">
            {photos.map((item) => {
                return (
                    <div className="main__body" key={item.id}>

                        <img className="main__top" src={item.img} alt={"clothes"}></img>

                    </div>
                );
            })}
        </div>
    );
};

export default Photos;
