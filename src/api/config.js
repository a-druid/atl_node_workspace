import axios from 'axios'
import router from '../router';
const baseURL = 'http://localhost:8433'
// const baseURL = 'http://localhost:3000'
// const baseURL = ''

var instance = axios.create()

instance.defaults.timeout = 30000
//instance.defaults.headers['Access-Control-Allow-Origin'] = '*';
instance.interceptors.request.use(async config => {
    // if (config.url != '/login' && !localStorage.getItem('user_id')) {
    //     router.push('/');
    // }
    if (config.url && config.url.charAt(0) === '/') {
        config.url = `${baseURL}${config.url}`
    }

    return config
}, error => Promise.reject(error))

instance.interceptors.response.use(response => {
    if (response.status === 200) {
        return response.data
    }
    return Promise.reject(response)
}, error => {
    if (error) {
        console.log(JSON.stringify(error))
    } else {
        console.log('ISSUE')
    }
    return Promise.reject(error)
})

export default instance