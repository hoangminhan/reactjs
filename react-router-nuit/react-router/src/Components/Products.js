import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Route, useHistory, useParams } from 'react-router-dom';
import Item from './Item';

Products.propTypes = {
    match: PropTypes.object,

};
Products.defaultProps = {
    match: null
}

function Products(props) {
    const Products = [{
        id: 1,
        slug: 'iphone',
        name: "Iphone",
        price: 2500000

    },
    {
        id: 1,
        slug: 'samsung',
        name: "SamSung",
        price: 700000

    },
    {
        id: 1,
        slug: 'vivo',
        name: "Vivo",
        price: 200000

    }]
    const { match } = props
    console.log(match)
    const url = match.url
    const history = useHistory()
    console.log(history)
    return (
        <div>

            <div className="row">
                <ul className="list-group">
                    {
                        Products && Products.length ? Products.map((product, index) => {
                            return (
                                <NavLink key={index} to={`${url}/${product.slug}`}>
                                    <li className="list-group-item">{product.name}{`---`}{product.price}
                                    </li></NavLink>
                            )
                        }) : null
                    }
                </ul>
            </div>



        </div>
    );
}

export default Products;