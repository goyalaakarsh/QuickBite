// // Dishes.jsx
// import React, { useContext, useState } from 'react';
// import { StoreContext } from '../../context/StoreContext';
// import { CartContext } from '../../context/CartContext';
// import './dishes.css';
// import DishCard from './DishCard';

// const Dishes = () => {
//     const { DishList } = useContext(StoreContext);
//     const { addToCart } = useContext(CartContext); // Use the context directly

//     const handleAddToCart = (dish, quantity) => {
//         const newItem = {
//             id: dish._id,
//             name: dish.name,
//             price: dish.price,
//             quantity: quantity,
//             image: dish.image,
//         };
//         addToCart(newItem); // Update context directly
//         console.log(newItem);
//     };

//     return (
//         <section className="dishes section" id='dishes'>
//             <div className="dishes_container container">
//                 <h2 className="section_title">Top dishes near you</h2>
//                 <div className="dish_item_container">
//                     {DishList.map((dish) => (
//                         <DishCard
//                             key={dish._id}
//                             id={dish._id}
//                             name={dish.name}
//                             price={dish.price}
//                             description={dish.description}
//                             category={dish.category}
//                             image={dish.image}
//                             addToCart={handleAddToCart}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Dishes;



import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import './dishes.css';
import DishCard from './DishCard';

const Dishes = () => {
    const { DishList } = useContext(StoreContext);

    const handleAddToCart = (dish, quantity) => {
        const newItem = {
            name: dish.name,
            price: dish.price,
            quantity: quantity,
            image: dish.image,
        };

        fetch('http://localhost:5000/api/cart/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ item: newItem }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                console.log('Item added to cart:', newItem);
            } else {
                console.error('Error adding item to cart');
            }
        })
        .catch(error => console.error('Error:', error));
    };

    return (
        <section className="dishes section" id='dishes'>
            <div className="dishes_container container">
                <h2 className="section_title">Top dishes near you</h2>
                <div className="dish_item_container">
                    {DishList.map((dish) => (
                        <DishCard
                            key={dish._id}
                            id={dish._id}
                            name={dish.name}
                            price={dish.price}
                            description={dish.description}
                            category={dish.category}
                            image={dish.image}
                            addToCart={handleAddToCart}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Dishes;
