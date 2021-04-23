import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import callApi from './../../utils/apiCaller'
import { Link } from 'react-router-dom'


// ProductActionPage.propTypes = { 
//     a: PropTypes.object,


// };
// ProductActionPage.defaultProps = {
//     a: null

// }

function ProductActionPage(props) {
    const [values, setValues] = useState({
        id: '',
        txtName: '',
        txtPrice: '',
        txtStatus: ''
    })

    var id = useParams()
    useEffect(() => {
        console.log("pa", id)
        callApi(`product/${id}`, 'GET', null).then(res => {
            console.log(res)
        })
    }, [])
    function handleChange(e) {
        // const target = e.target
        // var value = target.type === 'checkbox' ? target.cheked : target.value
        // var target = e.target
        // var name = target.name
        // var value = target.type === 'checkbox' ? target.checked : target.value
        // setValues({
        //     [name]: value
        // })
        var value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        setValues((data) => ({
            ...data,
            [e.target.name]: value
        }))
    }

    let history = useHistory()

    const { txtName, txtPrice, txtStatus } = values
    function handleSubmit(e) {
        // e.preventDefault()
        e.preventDefault();
        console.log(history)

        callApi('product', 'POST', {
            name: txtName,
            price: txtPrice,
            status: txtStatus
        }).then(res => {
            history.goBack()
        })


    }

    return (

        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="float-left">Tên sản phẩm </label>
                    <input type="text" className="form-control"
                        name="txtName"
                        onChange={handleChange}
                        value={txtName}

                    />
                </div>
                <div className="form-group">
                    <label className="float-left">Giá </label>
                    <input type="number" className="form-control"
                        name="txtPrice"
                        onChange={handleChange}
                        value={txtPrice}


                    />
                </div>
                <div className="form-group">
                    <label className="float-left"


                    >Trạng thái</label>
                    <input type="checkbox"
                        name="txtStatus"
                        onChange={handleChange}
                        value={txtStatus}
                    />
                    <label className="float-left">

                        Còn hàng
                    </label>


                </div>
                <Link to="/product-list" className="btn btn-danger">Quay lại</Link>

                <button type="submit" className="btn btn-primary">Lưu lại</button>&nbsp;

            </form>
        </div>

    );
}

export default ProductActionPage;