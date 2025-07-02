export const getCoinHistory = async (id = 'bitcoin', currency = 'usd', days = 90) => {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart`, {
        params: {
            vs_currency: currency,
            days: days, // e.g. 90 for 3 months
            interval: 'daily',
        },
    });

    return response.data.prices; // Format: [[timestamp, price], ...]
};
