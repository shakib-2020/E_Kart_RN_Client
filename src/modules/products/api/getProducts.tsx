import {BASE_URL} from '@store/config';
import axios from 'axios';

export const getProductsByCategory = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/product/${id}`);

  return response?.data?.products;
};
