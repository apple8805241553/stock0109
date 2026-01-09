// 數據驗證
const validateSymbol = (req, res, next) => {
    const { symbol } = req.params;

    if (!symbol) {
        return res.status(400).json({ error: 'Symbol is required' });
    }

    next();
};

module.exports = {
    validateSymbol
};
