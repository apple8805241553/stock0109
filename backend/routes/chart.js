// 圖表數據路由
const express = require('express');
const router = express.Router();
const chartController = require('../controllers/chartController');

router.get('/:symbol', chartController.getChartData);

module.exports = router;
