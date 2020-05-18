import axios from 'axios';
import {baseUrl} from '../../config/index';

export const apiCall =(url, data, headers, method) =>axios ({
    method,
    url: baseUrl + url,
    data, 
    headers
})
