import Axios from "../axiosInstance";
import { API_ENDPOINTS } from "../endpoints";

export const adminServices = {
    getAllAdmins: async () => {
        const response = await Axios.get(API_ENDPOINTS.admin.getAll);
        return response.data;
    },
<<<<<<< HEAD
    createNewAdmin: async (formData) => {
        const response = await Axios.post(API_ENDPOINTS.adminAuth.createNew, formData);
        return response.data;
    }
=======
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
}