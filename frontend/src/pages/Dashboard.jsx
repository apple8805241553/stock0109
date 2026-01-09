import React, { useState, useEffect } from 'react';
import StockSearch from '../components/StockSearch/StockSearch';
import StockTable from '../components/StockTable/StockTable';
import Loading from '../components/Loading/Loading';
import { fetchStocks } from '../services/api';

const Dashboard = () => {
    const [stocks, setStocks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadStocks();
    }, []);

    const loadStocks = async () => {
        setLoading(true);
        try {
            const data = await fetchStocks();
            setStocks(data);
            setError(null);
        } catch (err) {
            setError('載入股票數據失敗');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async (symbol) => {
        setLoading(true);
        try {
            const data = await fetchStocks(symbol);
            setStocks(data);
            setError(null);
        } catch (err) {
            setError('搜尋失敗');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="dashboard">
            <StockSearch onSearch={handleSearch} />
            {error && <div className="error-message">{error}</div>}
            {loading ? <Loading /> : <StockTable stocks={stocks} />}
        </div>
    );
};

export default Dashboard;
