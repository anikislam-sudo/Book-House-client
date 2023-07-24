import { api } from "../api/apiSlice";

const productApi=api.injectEndpoints({
    endpoints:(builder)=>({
         getBook:builder.query({
           query: ()=>"/books"
         }),
    })
})


export const {useGetBookQuery}=productApi;