import React from 'react';

ProductList.propTypes = {

};

function ProductList(props) {
    return (
        <div>
            <div className="panel panel-primary mt-50">
                <div className="panel-heading">
                    <h3 className="panel-title">Danh sách sản phẩm</h3>
                </div>
                <div className="panel-body">

                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>MASP</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.children}

                        </tbody>
                    </table>

                </div>
            </div>



        </div >
    );
}

export default ProductList;