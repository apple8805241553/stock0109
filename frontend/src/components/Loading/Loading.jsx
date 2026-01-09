import React from 'react';
import './Loading.css';

const Loading = () => {
    return (
        <div className="loading-container">
            <div className="spinner">
                <div className="spinner-ring"></div>
                <div className="spinner-ring"></div>
                <div className="spinner-ring"></div>
            </div>
            <p className="loading-text">正在加載股票數據...</p>
        </div>
    );
};

export default Loading;
