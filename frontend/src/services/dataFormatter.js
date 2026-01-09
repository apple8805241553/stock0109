export const formatPrice = (price) => {
    return new Intl.NumberFormat('zh-TW', {
        style: 'currency',
        currency: 'USD',
    }).format(price);
};

export const formatPercent = (percent) => {
    const sign = percent >= 0 ? '+' : '';
    return `${sign}${percent.toFixed(2)}%`;
};

export const formatVolume = (volume) => {
    if (volume >= 1000000) {
        return `${(volume / 1000000).toFixed(2)}M`;
    }
    if (volume >= 1000) {
        return `${(volume / 1000).toFixed(2)}K`;
    }
    return volume.toString();
};

export const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('zh-TW', options);
};

export const getPriceColor = (change) => {
    return change >= 0 ? '#27ae60' : '#e74c3c';
};
