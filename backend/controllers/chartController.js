// 圖表控制邏輯
const dataService = require('./dataService');

const getChartData = async (req, res) => {
    try {
        const { symbol } = req.params;
        const chartData = await dataService.fetchChartData(symbol);
        res.json(chartData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getChartData
};
