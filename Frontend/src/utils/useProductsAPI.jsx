import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
export const useProductsAPI = () => {
  const [search, setSearch] = useState('');
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      try {
        const response = await axios.get(`https://fakestoreapiserver.reactbd.com/products`);
        return response.data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  });

  return { isLoading, isError, error, data };
};
