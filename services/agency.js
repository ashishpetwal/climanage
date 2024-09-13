import axios from 'axios';

export const getAgencyData = async () => {
    try {
        const response = await axios.get(process.env.NEXT_PUBLIC_API_DEV_URL + '/agency/get-all');
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const getAgencyById = async (id) => {
    try {
        const response = await axios.get(process.env.NEXT_PUBLIC_API_DEV_URL + '/agency/get-one/' + id);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const createAgency = async (data) => {
    try {
        const response = await axios.post(process.env.NEXT_PUBLIC_API_DEV_URL + '/agency/add', data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const updateAgency = async (id, data) => {
    try {
        const response = await axios.put(process.env.NEXT_PUBLIC_API_DEV_URL + '/agency/update/' + id, data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const deleteAgency = async (id) => {
    try {
        const response = await axios.delete(process.env.NEXT_PUBLIC_API_DEV_URL + '/agency/delete/' + id);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}