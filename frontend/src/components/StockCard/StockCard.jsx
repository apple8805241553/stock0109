import React, { useState, useEffect } from 'react';
import { FiTrendingUp, FiTrendingDown, FiBarChart2 } from 'react-icons/fi';
import { stockAPI } from '../../services/api';
import { formatPrice, formatPercent, getPriceColor } from '../../services/dataFormatter';
import StockChart from '../StockChart/StockChart';
import './StockCard.css';

const StockCard = ({ stock }) => {
    const [showChart, setShowChart] = useState(false);
    const [chartData, setChartData] = useState(null);
    const [loading, setLoading] = useState(false);

    const priceColor = getPriceColor(stock.change);
    const isPositive = stock.change >= 0;

    const handleShowChart = async () => {
        if (showChart) {
            setShowChart(false);
            return;
        }

        try {
            setLoading(true);
            const response = await stockAPI.getChartData(stock.symbol);
            setChartData(response.data);
            setShowChart(true);
        } catch (error) {
            console.error('Error fetching chart data:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="stock-card card">
            {/* 卡片頭部 */}
            <div className="card-header">
                <div className="stock-header">
                    <div className="stock-info">
                        <h3 className="stock-symbol">{stock.symbol}</h3>
                        <p className="stock-name">{stock.name}</p>
                    </div>
                    <div className={`price-change ${isPositive ? 'positive' : 'negative'}`}>
                        {isPositive ? <FiTrendingUp /> : <FiTrendingDown />}
                    </div>
                </div>
            </div>

            {/* 卡片主體 */}
            <div className="card-body">
                {/* 價格 */}
                <div className="price-section">
                    <span className="current-price">{formatPrice(stock.price)}</span>
                    <span
                        className="price-change-amount"
                        style={{ color: priceColor }}
                    >
                        {isPositive ? '+' : ''}{formatPrice(stock.change)}
                    </span>
                </div>

                {/* 百分比 */}
                <div className="percent-section">
                    <span
                        className="percent-badge"
                        style={{
                            backgroundColor: priceColor,
                            color: 'white'
                        }}
                    >
                        {formatPercent(stock.changePercent)}
                    </span>
                </div>

                {/* 統計信息 */}
                <div className="stats-section">
                    <div className="stat-item">
                        <span className="stat-label">成交量</span>
                        <span className="stat-value">{stock.volume}</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">市值</span>
                        <span className="stat-value">{stock.marketCap}</span>
                    </div>
                </div>
            </div>

            {/* 卡片底部 */}
            <div className="card-footer">
                <button
                    className="button button-secondary"
                    onClick={handleShowChart}
                    disabled={loading}
                >
                    <FiBarChart2 />
                    {showChart ? '隱藏圖表' : '顯示圖表'}
                </button>
            </div>

            {/* 圖表區域 */}
            {showChart && chartData && (
                <div className="chart-section">
                    <StockChart data={chartData} symbol={stock.symbol} />
                </div>
            )}
        </div>
    );
};

export default StockCard;
