import { sellerService } from "@/api/services/seller.service"
import { useQuery } from "@tanstack/react-query"

export const useGetSellerById = (sellerId) => {
<<<<<<< HEAD
    console.log("usequery reached", sellerId)
    return useQuery({
        queryKey: ["seller", sellerId],
        queryFn: async () => {
            console.log("queryFn executing");
            try {
                const data = await sellerService.getSellerById(sellerId);
                console.log("queryFn success", data);
                return data;
            } catch (error) {
                console.error("queryFn error", error);
                throw error;
            }
        },
        enabled: !!sellerId,
        retry: false // Disable retries temporarily for debugging
=======
    return useQuery({
        queryKey: ["seller", sellerId],
        queryFn: () => sellerService.getSellerById(sellerId),
        enabled: !!sellerId
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
    })
}