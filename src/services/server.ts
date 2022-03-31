import { makeServer } from './mock'

if (process.env.NODE_ENV !== 'production') {
    makeServer();
} 

