import React from 'react';
import { NavLink } from 'react-router-dom'


Menu.propTypes = {

};
const menus = [{

    name: "HomPage",
    to: '/',
    exact: true
},
{

    name: "About",
    to: '/about',
    exact: true
},
{

    name: "Concat",
    to: '/contact',
    exact: true
},
{

    name: "Product",
    to: '/product',
    exact: true
},]

function Menu(props) {
    return (
        <nav className="navbar navbar-inverse">
            <ul className="nav navbar-nav">

                {menus && menus.length ? menus.map((menu, index) => {
                    return (<li key={index}>
                        <NavLink to={menu.to} exact={menu.exact}>{menu.name}</NavLink>
                    </li>)
                }) : null}
            </ul>
        </nav>

    );
}

export default Menu;