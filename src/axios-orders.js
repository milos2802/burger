import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-react-app-faedb.firebaseio.com/'
});

export default instance;