import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StockChart from '../components/StockChart/StockChart';
import Loading from '../components/Loading/Loading';
import { fetchStockDetail } from '../services/api';

const DetailPage = () => {
    const { symbol } = useParams();
    const [stock, setStock] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadStockDetail();
    }, [symbol]);

    const loadStockDetail = async () => {
        setLoading(true);
        try {
            const data = await fetchStockDetail(symbol);
            setStock(data);
            setError(null);
        } catch (err) {
            setError('載入股票詳情失敗');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <Loading />;
    if (error) return <div className="error-message">{error}</div>;

    return (
        <div className="detail-page">
            <h1>{stock?.symbol} - {stock?.name}</h1>
            <div className="detail-content">
                <StockChart symbol={stock?.symbol} data={stock?.chartData} />
            </div>
        </div>
    );
};

export default DetailPage;
