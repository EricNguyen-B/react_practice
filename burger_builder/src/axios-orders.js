import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-d2bbc.firebaseio.com/'
});

export default instance;