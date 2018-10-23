import axios from 'axios';

export const jsonPlaceholder = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export const firebase = axios.create({
  baseURL: 'https://udemy-react-1337.firebaseio.com/'
})