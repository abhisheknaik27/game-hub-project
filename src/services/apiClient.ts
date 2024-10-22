import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '47fa176ac7264981bdcac06149c57850'
    }
})