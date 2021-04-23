import React from 'react';
import { useParams } from 'react-router';

Item.propTypes = {

};

function Item(props) {
    let { name } = useParams()
    // console.log('slug', slug)
    console.log(useParams())
    return (
        <div>
            Chi tiết sản phẩm {name}
        </div>
    );
}

export default Item;