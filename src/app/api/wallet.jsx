import axios from 'axios';

const BASE_URL = 'https://api.coingecko.com/api/v3';

export const getCoins = async (currency = 'usd', page = 1, perPage = 3) => {
    try {
        const response = await axios.get(`${BASE_URL}/coins/markets`, {
            params: {
                vs_currency: currency,
                order: 'market_cap_desc',
                per_page: perPage,
                page: page,
                sparkline: true,
            },
        });

        console.log('✅ [SERVICE] Data fetched:', response.data.length, 'coins');
        return response.data;
    } catch (error) {
        console.error('❌ Error fetching coins:', error?.response?.data || error.message);
        throw error;
    }
};
