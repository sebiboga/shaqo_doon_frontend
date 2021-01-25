import axios from 'axios';

const hostname = window.location.hostname;

export default axios.create({
    baseURL: hostname.includes('shaqodoon') ? 'https://api.shaqodoon.ro/' : 'http://zimbor.go.ro/api/bot'
    // baseURL: 'http://zimbor.go.ro/api/bot'
    // baseURL: 'https://api.shaqodoon.ro/'
})