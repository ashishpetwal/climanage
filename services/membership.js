import axios from 'axios';

export const getMembershipData = async () => {
    try {
        const response = await axios.get(process.env.NEXT_PUBLIC_API_DEV_URL + '/membership');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getMembershipById = async (id) => {
    try {
        const response = await axios.get(process.env.NEXT_PUBLIC_API_DEV_URL + '/membership/' + id);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const createMembership = async (data) => {
    try {
        const response = await axios.post(process.env.NEXT_PUBLIC_API_DEV_URL + '/membership', data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const updateMembership = async (id, data) => {
    try {
        const response = await axios.put(process.env.NEXT_PUBLIC_API_DEV_URL + '/membership/' + id, data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const deleteMembership = async (id) => {
    try {
        const response = await axios.delete(process.env.NEXT_PUBLIC_API_DEV_URL + '/membership/' + id);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}