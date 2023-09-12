import React from 'react'
import axios from 'axios'
import { useQueries} from '@tanstack/react-query'

export const useAPI = () => {
    const [walmartQuery, amazonproductsQuery, nextamazonQuery] = useQueries({
       queries:[
        {
            queryKey:['walmart'],
            queryFn: async() => {
              try{
                const response = await axios.get('https://fakestoreapiserver.reactbd.com/walmart');
                // console.log(response.data)
                return response.data
              }catch(error){
                console.log(error)
              }
              }
        },
        {
            queryKey:['amazonproducts'],
            queryFn: async() => {
              try{
                const response = await axios.get('https://fakestoreapiserver.reactbd.com/amazonproducts');
                // console.log(response.data)
                return response.data
              }catch(error){
                console.log(error)
              }
              }
        },
        {
            queryKey:['nextamazon'],
            queryFn: async() => {
              try{
                const response = await axios.get('https://fakestoreapiserver.reactbd.com/nextamazon');
                // console.log(response.data)
                return response.data
              }catch(error){
                console.log(error)
              }
              }
        },
       ]
      })
  return {walmartQuery, amazonproductsQuery, nextamazonQuery}
}
