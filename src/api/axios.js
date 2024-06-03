import  axios from 'axios';

const instance = axios.create({
    baseURL: "http://api.themoviedb.org/3",
    params: {
        api_key:"2c83aedf61866f80c457466bc1fe4e68",
        language: "ko-KR"
    }
})

export default instance;