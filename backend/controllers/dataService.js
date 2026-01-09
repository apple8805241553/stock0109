// 數據服務層 (API 調用、數據處理)
const config = require('../config/config');

const fetchStockData = async (symbol) => {
    try {
        // TODO: 實現 API 調用邏輯
        return {
            symbol,
            price: 0,
            change: 0,
            changePercent: 0
        };
    } catch (error) {
        throw error;
    }
};

const fetchAllStocks = async () => {
    try {
        // TODO: 實現獲取所有股票的邏輯
        return [];
    } catch (error) {
        throw error;
    }
};

const fetchChartData = async (symbol) => {
    try {
        // TODO: 實現圖表數據的 API 調用邏輯
        return {
            symbol,
            data: []
        };
    } catch (error) {
        throw error;
    }
};

module.exports = {
    fetchStockData,
    fetchAllStocks,
    fetchChartData
};
