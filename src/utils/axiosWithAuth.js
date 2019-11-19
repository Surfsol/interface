import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token')

    return axios.create({
        headers: {
            Authorization:token
        },
        baseURL: 'https://backend-posthere-russ-and-mack.herokuapp.com'
    })
}