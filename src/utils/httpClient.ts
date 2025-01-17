import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const API_TOKEN = process.env.API_TOKEN;
const BASE_URL = process.env.BASE_URL || 'https://api.themoviedb.org/3';

export const httpClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json'
    }
});
