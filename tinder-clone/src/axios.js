import axios from 'axios';

const instance = axios.create({
    baseURL: "https://tinder-backendsss.herokuapp.com"
})

export default instance;