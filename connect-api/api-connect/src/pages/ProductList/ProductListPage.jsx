import React, { useEffect, useState } from 'react';
import ProductItem from '../../components/ProductItem/ProductItem';
import ProductList from '../../components/ProductList/ProductList';
import callApi from './../../utils/apiCaller'
import { NavLink, useHistory, useParams } from 'react-router-dom'


function ProductListPage(props) {
    const [products, setProducts] = useState([])
    // const products = useSelector(state => state.product)
    // console.log(products)
    // useEffect(() => {
    //     callApi('product', 'GET', null).then(res => {
    //         // setProducts(res.data)
    //         console.log(res)
    //     })

    // }, [])


    // useEffect(() => {

    //     async function fetchPostList() {
    //         try {
    //             const requestUrl = `http://localhost:3000/product`
    //             const response = await fetch(requestUrl)
    //             const responseJson = await response.json()
    //             console.log({ responseJson })


    //             setProducts(responseJson)
    //         } catch (error) {
    //             console.log(error.message)
    //         }
    //     }
    //     fetchPostList()
    // }, [])
    const history = useHistory()



    function handleDelete(data) {
        // console.log(data);
        callApi(`product/${data}`, 'DELETE', null).then(res => {
            const check = findIndex(products, data)
            products.splice(check, 1)
            setProducts(products)
            history.push('/product-list')
        })

    }
    function findIndex(products, id) {
        var result = -1
        products.forEach((product, index) => {
            if (product.id === index) {
                result += 1
            }
        })
        return result
    }
    return (
        <div className="row">

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <NavLink to="product/add" className="btn btn-danger float-left">Thêm sản phẩm</NavLink>
                <ProductList >
                    {
                        products && products.length ? products.map((product, index) => {
                            return (
                                <ProductItem
                                    // to={`/product/${product.id}`}
                                    handleDeleteP={handleDelete}
                                    key={product.id}
                                    index={index}
                                    product={product}

                                />
                            )
                        }) : null
                    }

                </ProductList>
            </div>
        </div>
    );
}

export default ProductListPage;