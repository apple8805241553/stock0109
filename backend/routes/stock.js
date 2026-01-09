const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stockController');

// GET 所有股票
router.get('/', stockController.getAllStocks);

// GET 特定股票信息
router.get('/:symbol', stockController.getStockBySymbol);

// GET 股票歷史數據
router.get('/:symbol/historical', stockController.getHistoricalData);

// GE
