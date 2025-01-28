import { adminServices } from "@/api/services/admin.service"
<<<<<<< HEAD
import { useMutation, useQuery } from "@tanstack/react-query"
=======
import { useQuery } from "@tanstack/react-query"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d

export const useGetAllAdmins = () => {
    return useQuery({
        queryKey: ["admins"],
        queryFn: () => adminServices.getAllAdmins(),
        select: (data) => data.admins,
    })
}
<<<<<<< HEAD

export const useCreateNewAdmin = () => {
    return useMutation({
        mutationKey: ["createAdmin"],
        mutationFn: (formData) => adminServices.createNewAdmin(formData),
    })
}
=======
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
