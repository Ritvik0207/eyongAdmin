import Axios from "../axiosInstance";
import { API_ENDPOINTS } from "../endpoints";

export const sellerService = {
    getSellerById: async (sellerId) => {
<<<<<<< HEAD
        console.log("hereeeee with sellerId:", sellerId)
        try {
            const url = API_ENDPOINTS.seller.getSellerById(sellerId);
            console.log("Making request to:", url);
            const response = await Axios.get(url);
            console.log(response, "response")
            return response.data;
        } catch (error) {
            console.error("API call error:", error);
            throw error;
        }
=======
        const response = Axios.get(API_ENDPOINTS.seller.getSellerById(sellerId));
        return (await response).data;
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
    }
}