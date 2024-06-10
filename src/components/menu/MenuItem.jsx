import React from 'react';

const MenuItem = ({ name, image }) => {
    return (
        <div className="menu_items">
            <div className="menu_item">
                <img src={image} alt={name} className="menu_item-img" /> {/* Use props for image source and alt text */}
                <p className='menu_item-cat'>{name}</p> {/* Use props for category name */}
            </div>
        </div>
    );
}

export default MenuItem;
