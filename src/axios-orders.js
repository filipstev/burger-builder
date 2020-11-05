import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-52942.firebaseio.com/'
});

export default instance;