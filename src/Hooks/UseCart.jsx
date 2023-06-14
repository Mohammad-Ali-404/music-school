import { useContext } from "react";
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from "../providers/AuthProvider";

const useCart = () =>{
    const {user} = useContext(AuthContext)
    const token = localStorage.getItem('access-token')
    const {refetch , data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () =>{
            const response = await fetch(`https://summer-camp-server-rosy.vercel.app/carts?email=${user.email}`, {
                headers:{
                    authorization:`bearer${token}`
                }
            })
            return response.json()
        },
      })
      return[cart, refetch]
}
export default useCart;