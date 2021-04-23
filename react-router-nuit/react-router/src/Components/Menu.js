import React from 'react';
import { NavLink } from 'react-router-dom'
Menu.propTypes = {

};
const menus = [{
    name: "Trang chủ",
    to: '/',
    exact: true
},
{
    name: "Giới thiệu",
    to: '/about',
    exact: true
},

{
    name: "Liên hệ",
    to: '/contact',
    exact: true
},
{
    name: "Sản Phẩm",
    to: '/products',
    exact: true
}]

function Menu(props) {
    return (
        <nav className="navbar navbar-inverse">
            <ul className="nav navbar-nav">
                {menus.map((menu, index) => {
                    return (<NavLink key={index} to={menu.to} exact={menu.exact} lable={menu.lable}
                        className="my-link">{menu.name}</NavLink>)
                })}
            </ul>
        </nav>
    );

}







export default Menu;