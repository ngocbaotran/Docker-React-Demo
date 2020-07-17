import React from "react";

import ReactLoading from 'react-loading';

import './Loading.css';

const Loading = () => (
    <div className="Loading-popup-overlay">
        <div className="Loading">
            <ReactLoading type="bars" color="orange" height={'auto'} width={'9%'} />
        </div>
    </div>
);

export default Loading;