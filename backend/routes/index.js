// 主路由
const express = require('express');
const router = express.Router();

const stockRoutes = require('./stock');
const chartRoutes = require('./chart');
const healthRoutes = require('./health');

router.use('/stock', stockRoutes);
router.use('/chart', chartRoutes);
router.use('/health', healthRoutes);

module.exports = router;
