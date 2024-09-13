import axios from 'axios';

export const getSubscriptionData = async () => {
    try {
        const response = await axios.get(process.env.NEXT_PUBLIC_API_DEV_URL + '/subs');
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const getSubscriptionById = async (id) => {
    try {
        const response = await axios.get(process.env.NEXT_PUBLIC_API_DEV_URL + '/subs/' + id);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const createSubscription = async (data) => {
    try {
        const response = await axios.post(process.env.NEXT_PUBLIC_API_DEV_URL + '/subs', data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const updateSubscription = async (id, data) => {
    try {
        const response = await axios.put(process.env.NEXT_PUBLIC_API_DEV_URL + '/subs/' + id, data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const deleteSubscription = async (id) => {
    try {
        const response = await axios.delete(process.env.NEXT_PUBLIC_API_DEV_URL + '/subs/' + id);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}