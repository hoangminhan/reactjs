import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


Product.propTypes = {
    match: PropTypes.object

};
Product.defaultProps = {
    match: null
}
const Products = [{
    id: 1,
    slug: 'iphone',
    name: "Iphone",
    price: 100000000,
},
{
    id: 2,
    slug: 'samsung',

    name: "Samsung",
    price: 50000,
},
{
    id: 3,
    slug: 'oppo',

    name: "Oppo",
    price: 30000,
}]


function Product(props) {
    const { match } = props
    const url = match.url
    console.log("match", match)
    return (
        <div>
            <ul>
                {
                    Products && Products.length ? Products.map((product, index) => {
                        return <NavLink key={index} to={`${url}/${product.slug}`}>
                            <li>{product.id}--{product.name}--{product.price}</li>
                        </NavLink>
                    }) : null
                }
            </ul>
        </div>

    );
}

export default Product;