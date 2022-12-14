import { axiosClient } from "../API/Api";

const CateAPI = {
    getAll() {
        const url = `/categoris`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/categoris/${id}`;
        return axiosClient.get(url);
    },



};
export default CateAPI;
export const add = (data) => {
    const url = `/categoris`
    return axiosClient.post(url, data)
}
export const remove = (id) => {
    const url = `/categoris/${id}`;
    return axiosClient.delete(url);
}
export const uploadCate = (id, data) => {
    const url = `/categoris/${id}`;
    return axiosClient.put(url, data);
}