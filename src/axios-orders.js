import axios from "axios";

const instance = axios.create({
    baseURL: 'https://hamburger-5b55e-default-rtdb.firebaseio.com/'
});

export default instance;