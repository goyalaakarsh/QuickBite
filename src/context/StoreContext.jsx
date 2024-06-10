import React, { createContext, useState } from 'react';

// Importing icons and images
import basket_icon from '../assets/images/basket_icon.png';
import logo from '../assets/images/logo.png';
import header_img from '../assets/images/header_img.png';
import search_icon from '../assets/images/search_icon.png';
import rating_starts from '../assets/images/rating_starts.png';
import add_icon_white from '../assets/images/add_icon_white.png';
import add_icon_green from '../assets/images/add_icon_green.png';
import remove_icon_red from '../assets/images/remove_icon_red.png';
import app_store from '../assets/images/app_store.png';
import play_store from '../assets/images/play_store.png';
import linkedin_icon from '../assets/images/linkedin_icon.png';
import facebook_icon from '../assets/images/facebook_icon.png';
import twitter_icon from '../assets/images/twitter_icon.png';
import cross_icon from '../assets/images/cross_icon.png';
import selector_icon from '../assets/images/selector_icon.png';
import profile_icon from '../assets/images/profile_icon.png';
import bag_icon from '../assets/images/bag_icon.png';
import logout_icon from '../assets/images/logout_icon.png';
import parcel_icon from '../assets/images/parcel_icon.png';

// Importing menu images
import menu_1 from '../assets/images/menu_1.png';
import menu_2 from '../assets/images/menu_2.png';
import menu_3 from '../assets/images/menu_3.png';
import menu_4 from '../assets/images/menu_4.png';
import menu_5 from '../assets/images/menu_5.png';
import menu_6 from '../assets/images/menu_6.png';
import menu_7 from '../assets/images/menu_7.png';
import menu_8 from '../assets/images/menu_8.png';

// Importing food images
import food_1 from '../assets/images/food_1.png';
import food_2 from '../assets/images/food_2.png';
import food_3 from '../assets/images/food_3.png';
import food_4 from '../assets/images/food_4.png';
import food_5 from '../assets/images/food_5.png';
import food_6 from '../assets/images/food_6.png';
import food_7 from '../assets/images/food_7.png';
import food_8 from '../assets/images/food_8.png';
import food_9 from '../assets/images/food_9.png';
import food_10 from '../assets/images/food_10.png';
import food_11 from '../assets/images/food_11.png';
import food_12 from '../assets/images/food_12.png';
import food_13 from '../assets/images/food_13.png';
import food_14 from '../assets/images/food_14.png';
import food_15 from '../assets/images/food_15.png';
import food_16 from '../assets/images/food_16.png';
import food_17 from '../assets/images/food_17.png';
import food_18 from '../assets/images/food_18.png';
import food_19 from '../assets/images/food_19.png';
import food_20 from '../assets/images/food_20.png';
import food_21 from '../assets/images/food_21.png';
import food_22 from '../assets/images/food_22.png';
import food_23 from '../assets/images/food_23.png';
import food_24 from '../assets/images/food_24.png';
import food_25 from '../assets/images/food_25.png';
import food_26 from '../assets/images/food_26.png';
import food_27 from '../assets/images/food_27.png';
import food_28 from '../assets/images/food_28.png';
import food_29 from '../assets/images/food_29.png';
import food_30 from '../assets/images/food_30.png';
import food_31 from '../assets/images/food_31.png';
import food_32 from '../assets/images/food_32.png';

// Exporting all assets as a single object
export const assets = {
    logo,
    basket_icon,
    header_img,
    search_icon,
    rating_starts,
    add_icon_white,
    add_icon_green,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon,
};

// Menu categories
const MENU_CATEGORIES = {
    SALAD: 'Salad',
    ROLLS: 'Rolls',
    DESERTS: 'Deserts',
    SANDWICH: 'Sandwich',
    CAKE: 'Cake',
    PURE_VEG: 'Pure Veg',
    PASTA: 'Pasta',
    NOODLES: 'Noodles',
};

// Menu list
export const MenuList = [
    { menu_name: MENU_CATEGORIES.SALAD, menu_image: menu_1 },
    { menu_name: MENU_CATEGORIES.ROLLS, menu_image: menu_2 },
    { menu_name: MENU_CATEGORIES.DESERTS, menu_image: menu_3 },
    { menu_name: MENU_CATEGORIES.SANDWICH, menu_image: menu_4 },
    { menu_name: MENU_CATEGORIES.CAKE, menu_image: menu_5 },
    { menu_name: MENU_CATEGORIES.PURE_VEG, menu_image: menu_6 },
    { menu_name: MENU_CATEGORIES.PASTA, menu_image: menu_7 },
    { menu_name: MENU_CATEGORIES.NOODLES, menu_image: menu_8 },
];

// Dish List
export const DishList = [
    {
        _id: "1",
        name: "Chicken Rolls",
        image: food_7,
        price: 20,
        description: "Succulent chicken wrapped in a crispy roll.",
        category: "Rolls"
    },
    {
        _id: "2",
        name: "Cheese Pasta",
        image: food_25,
        price: 12,
        description: "Pasta coated in a creamy and rich cheese sauce.",
        category: "Pasta"
    },
    {
        _id: "3",
        name: "Grilled Sandwich",
        image: food_15,
        price: 16,
        description: "Golden grilled sandwich with your choice of fillings.",
        category: "Sandwich"
    },
    {
        _id: "4",
        name: "Butter Noodles",
        image: food_29,
        price: 14,
        description: "Noodles tossed in a savory butter sauce.",
        category: "Noodles"
    },
    {
        _id: "5",
        name: "Chicken Salad",
        image: food_4,
        price: 24,
        description: "Grilled chicken served on a bed of crisp mixed greens.",
        category: "Salad"
    },
    {
        _id: "6",
        name: "Veg Rolls",
        image: food_8,
        price: 15,
        description: "Delicious rolls stuffed with fresh vegetables.",
        category: "Rolls"
    },
    {
        _id: "7",
        name: "Fruit Ice Cream",
        image: food_10,
        price: 22,
        description: "Creamy ice cream loaded with chunks of fresh fruits.",
        category: "Deserts"
    },
    {
        _id: "8",
        name: "Chicken Pasta",
        image: food_28,
        price: 24,
        description: "Pasta with tender pieces of grilled chicken.",
        category: "Pasta"
    },
    {
        _id: "9",
        name: "Fried Cauliflower",
        image: food_22,
        price: 22,
        description: "Crispy fried cauliflower with a hint of spice.",
        category: "Pure Veg"
    },
    {
        _id: "10",
        name: "Greek Salad",
        image: food_1,
        price: 12,
        description: "A refreshing mix of veggies, olives, and feta cheese.",
        category: "Salad"
    },
    {
        _id: "11",
        name: "Cup Cake",
        image: food_17,
        price: 14,
        description: "Sweet and fluffy cupcake with delightful frosting.",
        category: "Cake"
    },
    {
        _id: "12",
        name: "Ripple Ice Cream",
        image: food_9,
        price: 14,
        description: "Creamy ice cream swirled with a ripple of rich flavor.",
        category: "Deserts"
    },
    {
        _id: "13",
        name: "Creamy Pasta",
        image: food_27,
        price: 16,
        description: "Pasta in a smooth and creamy white sauce.",
        category: "Pasta"
    },
    {
        _id: "14",
        name: "Veg Sandwich",
        image: food_23,
        price: 18,
        description: "Fresh vegetables stacked between slices of whole grain bread.",
        category: "Sandwich"
    },
    {
        _id: "15",
        name: "Beef Noodles",
        image: food_3,
        price: 22,
        description: "Noodles mixed with tender strips of beef.",
        category: "Noodles"
    },
    {
        _id: "16",
        name: "Mango Ice Cream",
        image: food_6,
        price: 14,
        description: "Refreshing ice cream with the tropical taste of mango.",
        category: "Deserts"
    },
    {
        _id: "17",
        name: "Vegan Cake",
        image: food_18,
        price: 12,
        description: "Delicious and dairy-free vegan cake.",
        category: "Cake"
    },
    {
        _id: "18",
        name: "Bread Sandwich",
        image: food_16,
        price: 24,
        description: "Simple and tasty sandwich made with fresh bread.",
        category: "Sandwich"
    },
    {
        _id: "19",
        name: "Tomato Pasta",
        image: food_26,
        price: 18,
        description: "Pasta served in a rich and tangy tomato sauce.",
        category: "Pasta"
    },
    {
        _id: "20",
        name: "Vanilla Ice Cream",
        image: food_12,
        price: 12,
        description: "Classic creamy vanilla ice cream with rich flavor.",
        category: "Deserts"
    },
    {
        _id: "21",
        name: "Garlic Mushroom",
        image: food_21,
        price: 14,
        description: "Flavorful garlic sautéed mushrooms with herbs.",
        category: "Pure Veg"
    },
    {
        _id: "22",
        name: "Rice Zucchini",
        image: food_24,
        price: 12,
        description: "Healthy rice dish featuring fresh zucchini.",
        category: "Pure Veg"
    },
    {
        _id: "23",
        name: "Somen Noodles",
        image: food_31,
        price: 20,
        description: "Light and thin somen noodles with a delicate flavor.",
        category: "Noodles"
    },
    {
        _id: "24",
        name: "Chicken Sandwich",
        image: food_13,
        price: 12,
        description: "Grilled chicken breast served between fresh bread slices.",
        category: "Sandwich"
    },
    {
        _id: "25",
        name: "Lasagna Rolls",
        image: food_5,
        price: 14,
        description: "Cheesy lasagna rolled up with a savory filling.",
        category: "Rolls"
    },
    {
        _id: "26",
        name: "Veg Noodles",
        image: food_30,
        price: 12,
        description: "Noodles mixed with a medley of fresh vegetables.",
        category: "Noodles"
    },
    {
        _id: "27",
        name: "Jar Ice Cream",
        image: food_11,
        price: 10,
        description: "Delicious ice cream served in a convenient jar.",
        category: "Deserts"
    },
    {
        _id: "28",
        name: "Butterscotch Cake",
        image: food_19,
        price: 20,
        description: "Rich and creamy butterscotch flavored cake.",
        category: "Cake"
    },
    {
        _id: "29",
        name: "Sliced Cake",
        image: food_20,
        price: 15,
        description: "Perfectly sliced piece of moist cake.",
        category: "Cake"
    },
    {
        _id: "30",
        name: "Cooked Noodles",
        image: food_32,
        price: 15,
        description: "Perfectly cooked noodles with a savory taste.",
        category: "Noodles"
    },
    {
        _id: "31",
        name: "Vegan Sandwich",
        image: food_14,
        price: 18,
        description: "A plant-based delight packed with fresh veggies.",
        category: "Sandwich"
    },
    {
        _id: "32",
        name: "Veg Salad",
        image: food_2,
        price: 18,
        description: "A vibrant assortment of seasonal vegetables and greens.",
        category: "Salad"
    }
];

// Create context
export const StoreContext = createContext(null);


// Create context provider component
export const StoreProvider = ({ children }) => {
    const [menuList, setMenuList] = useState(MenuList);
    const [dishList, setDishList] = useState(DishList);
    const [cartItems, setCartItems] = useState([]);
    const [order, setOrder] = useState(null);

    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((i) => i._id === item._id);
            if (existingItem) {
                return prevItems.map((i) =>
                    i._id === item._id ? { ...i, quantity: item.quantity } : i
                );
            }
            return [...prevItems, item];
        });
        console.log('Updated cart items:', cartItems); // Log the cart items after updating
    };

    const removeFromCart = (dishId) => {
        setCartItems((prevItems) => prevItems.filter((item) => item._id !== dishId));
    };

    const placeOrder = (orderDetails) => {
        setOrder(orderDetails);
        setCartItems([]);
    };

    const contextValue = { menuList, dishList, cartItems, addToCart, removeFromCart, placeOrder };

    return (
        <StoreContext.Provider
            value={contextValue}
        >
            {children}
        </StoreContext.Provider>
    );
};