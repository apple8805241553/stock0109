import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-left">
                    <h1 className="header-title">📈 股票量化儀表板</h1>
                    <p className="header-subtitle">實時股票數據分析平台</p>
                </div>
                <div className="header-right">
                    <span className="status-indicator">
                        <span className="status-dot"></span>
                        即時數據
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;
