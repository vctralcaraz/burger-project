import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-my-burger-3054f.firebaseio.com/'
})

export default instance