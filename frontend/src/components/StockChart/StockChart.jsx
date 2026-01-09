import React from 'react';
import {
    LineChart,
    Line,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import './StockChart.css';

const StockChart = ({ data, symbol }) => {
    if (!data || !data.chartData) {
        return <div className="chart-loading">載入中...</div>;
    }

    return (
        <div className="chart-container">
            <div className="chart-header">
                <h4>{symbol} - 價格趨勢</h4>
            </div>

            {/* 價格折線圖 */}
            <div className="chart">
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data.chartData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#ecf0f1" />
                        <XAxis
                            dataKey="time"
                            style={{ fontSize: '12px' }}
                        />
                        <YAxis
                            style={{ fontSize: '12px' }}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#fff',
                                border: '1px solid #ecf0f1',
                                borderRadius: '4px',
                            }}
                        />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="price"
                            stroke="#0066cc"
                            dot={false}
                            strokeWidth={2}
                            isAnimationActive={true}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* 成交量柱狀圖 */}
            <div className="chart">
                <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={data.chartData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#ecf0f1" />
                        <XAxis
                            dataKey="time"
                            style={{ fontSize: '12px' }}
                        />
                        <YAxis
                            style={{ fontSize: '12px' }}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#fff',
                                border: '1px solid #ecf0f1',
                                borderRadius: '4px',
                            }}
                        />
                        <Bar
                            dataKey="volume"
                            fill="#0066cc"
                            opacity={0.7}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default StockChart;
