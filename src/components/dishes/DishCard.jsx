import React, { useState } from 'react';
import './dishes.css';

const DishCard = ({ image, id, name, description, price, category, addToCart }) => {
    const [counter, setCounter] = useState(0);
    const [showCounter, setShowCounter] = useState(false);

    const handleAddClick = () => {
        setShowCounter(true);
        setCounter(counter + 1);
        addToCart({ _id: id, name, price, image, category }, counter + 1);
    };

    const handleSubtractClick = () => {
        if (counter > 0) {
            setCounter(counter - 1);
            addToCart({ _id: id, name, price, image, category }, counter - 1);
        }
    };

    const handleAddCounterClick = () => {
        setCounter(counter + 1);
        addToCart({ _id: id, name, price, image, category }, counter + 1);
    };

    return (
        <div className="dish_card">
            <div className="dish_card-img">
                <img src={image} alt="Dish" className="dish_img" />
                <div className="dish_cat">
                    {category}
                </div>
                {showCounter ? (
                    <div className="dish_card-counter">
                        <div className="dish_counter-sub" onClick={handleSubtractClick}>
                            -
                        </div>
                        <div className="dish_counter-num">
                            {counter}
                        </div>
                        <div className="dish_counter-add" onClick={handleAddCounterClick}>
                            +
                        </div>
                    </div>
                ) : (
                    <div className="dish_card-add" onClick={handleAddClick}>
                        +
                    </div>
                )}
            </div>

            <div className="dish_details">
                <h3 className="dish_name">{name}</h3>
                <p className="dish_description">{description}</p>
                <div className='price-stars'>
                    <h3 className="dish_price">${price}</h3>
                    <div className="stars">
                        <i className="dish_card-star fa-solid fa-star"></i>
                        <i className="dish_card-star fa-solid fa-star"></i>
                        <i className="dish_card-star fa-solid fa-star"></i>
                        <i className="dish_card-star fa-solid fa-star"></i>
                        <i className="dish_card-star fa-regular fa-star"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DishCard;
