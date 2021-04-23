import React from 'react';
import { NavLink } from 'react-router-dom';

Menu.propTypes = {

};
const menus = [{
    name: "trang chủ",
    to: "/",
    exact: true
},
{
    name: "Quản lý sản phẩm",
    to: "/product-list",
    exact: true
}]

function Menu(props) {
    return (
        <div>
            <div className="navbar">
                <p className="navbar-brand">Call Api</p>
                <ul className="nav navbar-nav">
                    {
                        menus && menus.length ? menus.map((menu, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={menu.to}>{menu.name}</NavLink>

                                </li>
                            )
                        }) : null
                    }
                    <NavLink to="/" ></NavLink>

                </ul>
            </div>
        </div>
    );
}

export default Menu;