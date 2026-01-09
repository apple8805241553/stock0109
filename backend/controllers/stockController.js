// 股票控制邏輯
const dataService = require('./dataService');

const getStock = async (req, res) => {
    try {
        const { symbol } = req.params;
        const data = await dataService.fetchStockData(symbol);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllStocks = async (req, res) => {
    try {
        const data = await dataService.fetchAllStocks();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getStock,
    getAllStocks
};
