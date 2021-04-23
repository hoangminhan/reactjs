import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router';

NotFound.propTypes = {

};

function NotFound(props) {
    let location = useLocation()
    console.log(useHistory())
    let history = useHistory()

    return (
        <div>
            {location.pathname}   404-NOT FOUND
            <button onClick={() => history.push('/about')}>Back</button>
        </div>
    );
}

export default NotFound;