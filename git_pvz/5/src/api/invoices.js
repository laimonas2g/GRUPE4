//  HTTP Client
import axios from 'axios';
const BASE = 'http://localhost:3000/inv';

export const fetchAll = () => axios.get(BASE);
export const fetchOne = id => axios.get(`${BASE}/${id}`);
export const createInv = data => axios.post(BASE, data);
export const updateInv = (id, data) => axios.put(`${BASE}/${id}`, data);
export const deleteInv = id => axios.delete(`${BASE}/${id}`);