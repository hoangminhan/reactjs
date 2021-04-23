import React from 'react';
import PropTypes from 'prop-types';
import callAPI from '../../utils/apiCaller';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'

ProductItem.propTypes = {
    product: PropTypes.array,
    index: PropTypes.number,
    handleDeleteP: PropTypes.func,

};
ProductItem.defaultProps = {
    product: null,
    index: null,
    handleDeleteP: null
}

function ProductItem(props) {
    const { product, index, handleDeleteP } = props
    const statusName = product.status ? 'Còn Hàng ' : 'Hết hàng'
    const statusClass = product.status ? 'warning' : 'default'

    // var a = product.id
    // a = useParams()
    // console.log(a)

    function handleDelete(data) {
        if (window.confirm('bạn có chắc muốn xoá không')) { //eslint-disavle-line
            handleDeleteP(data)

        }

    }
    return (

        <tr>
            <td>{index + 1}</td>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
                <span className={`label label-${statusClass}`}>
                    {statusName}</span>
            </td>
            <td>

                <Link to={`/product/${product.id}/edit`} className="btn btn-warning">Sửa</Link>&nbsp;

                <button type="button" class="btn btn-danger"
                    onClick={() => handleDelete(product.id)}>Xoá</button>

            </td>
        </tr>
    );
}

export default ProductItem;