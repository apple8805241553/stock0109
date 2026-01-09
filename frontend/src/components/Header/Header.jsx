import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <h1 className="logo">股票監控系統</h1>
                <nav className="nav">
                    <a href="/" className="nav-link">首頁</a>
                    <a href="/dashboard" className="nav-link">儀表板</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
