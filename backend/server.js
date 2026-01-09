const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// 中間件
app.use(cors());
app.use(express.json());

// 導入路由
const stockRoutes = require('./routes/stock');
const chartRoutes = require('./routes/chart');
const healthRoutes = require('./routes/health');

// 使用路由
app.use('/api/stocks', stockRoutes);
app.use('/api/chart', chartRoutes);
app.use('/api/health', healthRoutes);

// 錯誤處理中間件
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        error: err.message,
        timestamp: new Date().toISOString(),
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Stock API Server running on http://localhost:${PORT}`);
});
