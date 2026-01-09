import React, { useState, useRef } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import './StockSearch.css';

const StockSearch = ({ onSearch }) => {
    const [keyword, setKeyword] = useState('');
    const [showClear, setShowClear] = useState(false);
    const inputRef = useRef(null);

    const handleChange = (e) => {
        const value = e.target.value;
        setKeyword(value);
        setShowClear(value.length > 0);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            onSearch(keyword);
        }
    };

    const handleClear = () => {
        setKeyword('');
        setShowClear(false);
        inputRef.current?.focus();
    };

    return (
        <div className="search-container">
            <form className="search-form" onSubmit={handleSearch}>
                <div className="search-input-wrapper">
                    <FiSearch className="search-icon" />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="搜尋股票代號或名稱 (例: AAPL, Apple)..."
                        value={keyword}
                        onChange={handleChange}
                        className="search-input"
                    />
                    {showClear && (
                        <button
                            type="button"
                            onClick={handleClear}
                            className="clear-btn"
                        >
                            <FiX />
                        </button>
                    )}
                </div>
                <button type="submit" className="button button-primary">
                    搜尋
                </button>
            </form>
        </div>
    );
};

export default StockSearch;
