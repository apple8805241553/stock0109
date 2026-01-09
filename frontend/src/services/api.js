import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
});

// 請求攔截器
apiClient.interceptors.request.use(
    (config) => {
        console.log(`📡 API Request: ${config.method.toUpperCase()} ${config.url}`);
        return config;
    },
    (error) => {
        console.error('❌ Request Error:', error);
        return Promise.reject(error);
    }
);

// 響應攔截器
apiClient.interceptors.response.use(
    (response) => {
        console.log('✅ API Response:', response.data);
        return response.data;
    },
    (error) => {
        console.error('❌ Response Error:', error);
        return Promise.reject(error);
    }
);

export const stockAPI = {
    // 獲取所有股票
    getAllStocks: () => apiClient.get('/stocks'),

    // 獲取特定股票
    getStock: (symbol) => apiClient.get(`/stocks/${symbol}`),

    // 獲取歷史數據
    getHistoricalData: (symbol, period = '1month') =>
        apiClient.get(`/stocks/${symbol}/historical`, { params: { period } }),

    // 搜尋股票
    searchStock: (keyword) => apiClient.get(`/stocks/search/${keyword}`),

    // 獲取圖表數據
    getChartData: (symbol, range = '1d') =>
        apiClient.get(`/chart/${symbol}`, { params: { range } }),

    // 比較多個股票
    compareStocks: (symbols) => apiClient.get(`/chart/compare/${symbols.join(',')}`),

    // 健康檢查
    healthCheck: () => apiClient.get('/health'),
};

export default apiClient;
