import React, { useContext } from 'react';
import { StoreContext, MenuList } from '../../context/StoreContext';
import MenuItem from './MenuItem'; 
import './menu.css';

const Menu = () => {
    return (
        <section className="menu section" id='menu'>
            <div className="menu_container container">
                <h2 className="section_title">Explore our menu</h2>
                <span className='section_subtitle'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora et provident dignissimos. Corporis earum blanditiis molestias doloremque qui</span>

                <div className="menu_item_container">
                    {MenuList.map((menuItem, index) => ( 
                        <MenuItem
                            key={menuItem.menu_name} 
                            name={menuItem.menu_name} 
                            image={menuItem.menu_image} 
                        />
                    ))}
                </div>

                <div className="divider"></div>
            </div>
        </section>
    );
}

export default Menu;
