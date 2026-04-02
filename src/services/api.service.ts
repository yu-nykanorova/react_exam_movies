import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
});

export const getItems = async <T, >(
    url: string,
    params?: {page?: number; with_genres?: string}
): Promise<T> => {
    const {data} = await axiosInstance.get<T>(url, {params});
    return data;
};