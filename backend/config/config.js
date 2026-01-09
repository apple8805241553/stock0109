// 配置文件（API key、端口等）
module.exports = {
    port: process.env.PORT || 3001,
    apiKey: process.env.API_KEY,
    env: process.env.NODE_ENV || 'development'
};
