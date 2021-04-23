import React from 'react';

NotFound.propTypes = {

};

function NotFound(props) {
    return (
        <div className="container">

            <div className="alert">
                <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                <strong>Không tìm thấy trang</strong>
            </div>


        </div>
    );
}

export default NotFound;