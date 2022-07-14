import axios from 'axios';
import { BASE_URL } from '../../contants/connection_consts';

const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  // timeout: 20000,
});

export { API };
