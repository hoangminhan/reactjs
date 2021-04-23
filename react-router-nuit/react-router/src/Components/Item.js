import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';

Item.propTypes = {

};
Item.defaultProps = {
}

function Item(props) {
    const { slug } = useParams()

    return (
        <div>
            Chi tiết sản phẩm----{slug}
        </div>
    );
}

export default Item;