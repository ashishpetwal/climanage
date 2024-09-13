import axios from 'axios';

export const getCouponData = async () => {
    try {
        const response = await axios.get(process.env.NEXT_PUBLIC_API_DEV_URL + '/coupon');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getCouponById = async (id) => {
    try {
        const response = await axios.get(process.env.NEXT_PUBLIC_API_DEV_URL + '/coupon/' + id);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const createCoupon = async (data) => {
    try {
        const response = await axios.post(process.env.NEXT_PUBLIC_API_DEV_URL + '/coupon', data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const updateCoupon = async (id, data) => {
    try {
        const response = await axios.put(process.env.NEXT_PUBLIC_API_DEV_URL + '/coupon/' + id, data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const deleteCoupon = async (id) => {
    try {
        const response = await axios.delete(process.env.NEXT_PUBLIC_API_DEV_URL + '/coupon/' + id);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}