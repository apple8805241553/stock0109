import React from 'react';
import './StockTable.css';

const StockTable = ({ stocks }) => {
    return (
        <div className="stock-table">
            <table>
                <thead>
                    <tr>
                        <th>代號</th>
                        <th>名稱</th>
                        <th>價格</th>
                        <th>漲跌</th>
                        <th>漲跌幅(%)</th>
                    </tr>
                </thead>
                <tbody>
                    {stocks && stocks.length > 0 ? (
                        stocks.map((stock) => (
                            <tr key={stock.symbol}>
                                <td className="symbol">{stock.symbol}</td>
                                <td className="name">{stock.name}</td>
                                <td className="price">${stock.price}</td>
                                <td className={stock.change >= 0 ? 'positive' : 'negative'}>
                                    {stock.change >= 0 ? '+' : ''}{stock.change}
                                </td>
                                <td className={stock.changePercent >= 0 ? 'positive' : 'negative'}>
                                    {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent}%
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="empty">無數據</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default StockTable;
